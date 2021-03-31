import { Colors, ControlGroup, NumericInput } from "@blueprintjs/core";
import { throttle } from "lodash";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import * as React from "react";
import ReactMapGL, { GeolocateControl, ViewportProps } from "react-map-gl";
import styled from "styled-components";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import { useDarkMode } from "../../components/DarkModeContainer";
import { alpha } from "../../lib/colors";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import {
  assertSchemaOrgPointGeometry,
  SchemaOrgPointGeometry,
} from "../../xlsform-simple-schema/functions/schema-creation/geometry/SchemaOrgGeometry";
import { FieldProps } from "../FieldProps";

(mapboxgl as any).workerClass = MapboxWorker;
if (!process.env.REACT_APP_MAPBOX_ACCESS_TOKEN) {
  throw new Error(
    `Please define the REACT_APP_MAPBOX_ACCESS_TOKEN environment variable.`
  );
}
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const FieldContainer = styled.section`
  .mapboxgl-ctrl-group.geolocateControl {
    display: inline-block;
    margin: 8px;
  }

  > footer {
    width: 100%;
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    label {
      margin: 0.5rem;
    }
    input {
      width: 8rem !important;
    }
  }
`;

const MapContainer = styled.section`
  width: 100%;
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
`;

const CenteredPoint = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 15px;
  height: 15px;
  border: 3px solid white;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2), 0 0 1px rgba(0, 0, 0, 0.4);
  background-color: ${Colors.FOREST3};
`;

function getPointForCoordinates(
  coordinates: [number, number]
): SchemaOrgPointGeometry {
  // return {
  //   type: "Point",
  //   coordinates: [Number(coordinates[0].toFixed(6)), Number(coordinates[1].toFixed(6))],
  // };
  return {
    "@type": "GeoCoordinates",
    longitude: Number(coordinates[0].toFixed(6)),
    latitude: Number(coordinates[1].toFixed(6)),
  };
}

function getLatitudeFromValue(value: SchemaOrgPointGeometry) {
  return value.latitude;
}

function getLongitudeFromValue(value: SchemaOrgPointGeometry) {
  return value.longitude;
}

type Props = FieldProps & {
  onInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
  labelElement: React.ReactNode;
  value: unknown;
  defaultValue: unknown;
};

function GeoPointField(props: Props) {
  const { value } = props;
  assertSchemaOrgPointGeometry(value);

  const context = React.useContext(ODKSurveyContext);
  const { onChangeAnswer } = context;

  const [viewport, setViewport] = React.useState<
    Partial<ViewportProps> & { width: number; height: number }
  >({
    width: 100,
    height: 100,
    latitude: (value && getLatitudeFromValue(value)) || 37.7577,
    longitude: (value && getLongitudeFromValue(value)) || -122.4376,
    zoom: 10,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onChangeAnswerDebounced = React.useCallback(
    throttle((value: unknown, props: FieldProps) => {
      onChangeAnswer(value, props);
    }, 500),
    [onChangeAnswer]
  );

  const setViewportCallback = React.useCallback(
    (viewState, interactionState) => {
      setViewport({ ...viewport, ...viewState });
      if (!viewport.longitude || !viewport.latitude) {
        return;
      }
      const newPoint = getPointForCoordinates([
        viewport.longitude,
        viewport.latitude,
      ]);
      onChangeAnswerDebounced(newPoint, props);
    },
    [viewport, onChangeAnswerDebounced, props]
  );

  const changeLatitude = React.useCallback(
    (newLatitudeNumber: number, newLatitudeString: string) => {
      if (!viewport.longitude || !viewport.latitude) {
        return;
      }
      setViewport({ ...viewport, latitude: newLatitudeNumber });
      const newPoint = getPointForCoordinates([
        viewport.longitude,
        newLatitudeNumber,
      ]);
      onChangeAnswer(newPoint, props);
    },
    [viewport, onChangeAnswer, props]
  );

  const changeLongitude = React.useCallback(
    (newLongitudeNumber: number, newLongitudeString: string) => {
      if (!viewport.longitude || !viewport.latitude) {
        return;
      }
      setViewport({ ...viewport, longitude: newLongitudeNumber });
      const newPoint = getPointForCoordinates([
        newLongitudeNumber,
        viewport.latitude,
      ]);
      onChangeAnswer(newPoint, props);
    },
    [viewport, onChangeAnswer, props]
  );

  const isDarkMode = useDarkMode();
  const latitude = value && getLatitudeFromValue(value);
  const longitude = value && getLongitudeFromValue(value);
  const inputs = (
    <FieldContainer>
      <MapContainer>
        <ReactMapGL
          longitude={longitude}
          latitude={latitude}
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          width="100%"
          height="100%"
          onViewportChange={setViewportCallback}
          mapStyle={
            isDarkMode
              ? "mapbox://styles/mapbox/streets-dark-v10"
              : "mapbox://styles/mapbox/streets-v10"
          }
        >
          <GeolocateControl
            style={{
              margin: "8px",
              boxShadow: `0 2px 2px ${alpha(
                Colors.DARK_GRAY4,
                0.2
              )}, 0 2px 10px ${alpha(Colors.DARK_GRAY4, 0.3)}`,
            }}
            className="geolocateControl"
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={false}
            showUserLocation={true}
          />
        </ReactMapGL>
        <CenteredPoint />
      </MapContainer>

      {context.debug && (
        <ControlGroup style={{ alignItems: "center", margin: "8px 0" }}>
          <ControlGroup vertical={true}>
            <label htmlFor={`${props.schemaKey}-latitude`}>{"Latitude"}</label>
            <NumericInput
              style={{ width: "8em" }}
              stepSize={0.001}
              minorStepSize={0.0001}
              majorStepSize={0.01}
              min={-90}
              max={90}
              value={latitude}
              asyncControl={true}
              disabled={props.readonly}
              id={`${props.schemaKey}-latitude`}
              onValueChange={changeLatitude}
            />
          </ControlGroup>

          <ControlGroup vertical={true} style={{ marginLeft: "16px" }}>
            <label htmlFor={`${props.schemaKey}-longitude`}>
              {"Longitude"}
            </label>
            <NumericInput
              style={{ width: "8em" }}
              stepSize={0.001}
              minorStepSize={0.0001}
              majorStepSize={0.01}
              min={-180}
              max={180}
              asyncControl={true}
              value={longitude}
              disabled={props.readonly}
              id={`${props.schemaKey}-longitude`}
              onValueChange={changeLongitude}
            />
          </ControlGroup>
        </ControlGroup>
      )}
    </FieldContainer>
  );

  return inputs;
}

export default GeoPointField;
