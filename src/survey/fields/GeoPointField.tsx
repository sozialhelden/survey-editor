import { Colors } from "@blueprintjs/core";
import * as React from "react";
import ReactMapGL, { GeolocateControl, ViewportProps } from "react-map-gl";
import styled from "styled-components";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import {
  assertSchemaOrgPointGeometry,
  SchemaOrgPointGeometry,
} from "../../xlsform-simple-schema/functions/schema-creation/geometry/SchemaOrgGeometry";
import { FieldProps } from "../FieldProps";

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
  border-radius: 6px;
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
  return value.latitude;
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
    latitude: value && (getLatitudeFromValue(value) || 37.7577),
    longitude: value && (getLongitudeFromValue(value) || -122.4376),
    zoom: 18,
  });

  const setViewportCallback = React.useCallback(
    (viewState, interactionState) => {
      // console.log('Setting viewport because of callback:', viewState, interactionState);
      setViewport({ ...viewport, ...viewState });
      if (!viewport.longitude || !viewport.latitude) {
        return;
      }
      const newPoint = getPointForCoordinates([
        viewport.longitude,
        viewport.latitude,
      ]);
      onChangeAnswer(newPoint, props);
    },
    [viewport, onChangeAnswer, props]
  );

  const changeLatitude = React.useCallback(
    (event) => {
      if (!viewport.longitude || !viewport.latitude) {
        return;
      }
      const newPoint = getPointForCoordinates([
        viewport.longitude,
        event.currentTarget.value,
      ]);
      onChangeAnswer(newPoint, props);
    },
    [viewport.longitude, viewport.latitude, onChangeAnswer, props]
  );

  const changeLongitude = React.useCallback(
    (event) => {
      if (!viewport.longitude || !viewport.latitude) {
        return;
      }
      const newPoint = getPointForCoordinates([
        event.currentTarget.value,
        viewport.latitude,
      ]);
      onChangeAnswer(newPoint, props);
    },
    [viewport.longitude, viewport.latitude, onChangeAnswer, props]
  );

  const latitude = getLatitudeFromValue(value);
  const longitude = getLongitudeFromValue(value);
  const inputs = (
    <FieldContainer>
      <MapContainer>
        <ReactMapGL
          longitude={longitude}
          latitude={latitude}
          {...viewport}
          mapboxApiAccessToken={process.env.MAPBOX_API_TOKEN}
          width="100%"
          height="100%"
          onViewportChange={setViewportCallback}
          mapStyle="mapbox://styles/mapbox/streets-v10"
        >
          <GeolocateControl
            className="geolocateControl"
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={false}
            showUserLocation={true}
          />
        </ReactMapGL>
        <CenteredPoint />
      </MapContainer>

      <footer>
        <label htmlFor={`${props.schemaKey}-latitude`}>{"Latitude"}</label>
        <input
          className="form-control"
          type="number"
          step="0.01"
          value={latitude}
          disabled={props.readonly}
          id={`${props.schemaKey}-latitude`}
          onChange={changeLatitude}
        />
        <label htmlFor={`${props.schemaKey}-longitude`}>{"Longitude"}</label>
        <input
          className="form-control"
          type="number"
          step="0.01"
          value={longitude}
          disabled={props.readonly}
          id={`${props.schemaKey}-longitude`}
          onChange={changeLongitude}
        />
      </footer>
    </FieldContainer>
  );

  return inputs;
}

export default GeoPointField;
