import {
  Button,
  Card,
  ControlGroup,
  Elevation,
  FileInput,
  FormGroup,
  InputGroup,
  Spinner,
} from "@blueprintjs/core";
import * as React from "react";
import { uuid as getUUID } from "uuidv4";
import {
  createImageObjectFromAccessibilityCloudImage,
  createImageObjectFromFile,
  uploadPhoto,
} from "../../lib/images/uploadPhoto";
import { ODKSurveyContext } from "../../lib/ODKSurveyContext";
import { AppToaster } from "../../toaster";
import { ImageObject } from "../../xlsform-simple-schema/functions/schema-creation/MediaSchemas";
import { FieldProps } from "../FieldProps";

type Props = FieldProps & {
  onInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
  labelElement: React.ReactNode;
  value: ImageObject;
  defaultValue: unknown;
};

/** Displays the uploaded image, with an editable caption and a 'remove' button. */
function ImageCard({
  contentUrl,
  uuid,
  onChangeCaption,
  onRemoveImage,
}: {
  contentUrl: string;
  uuid: string;
  onChangeCaption: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveImage: () => void;
}) {
  return (
    <Card interactive={false} elevation={Elevation.ONE}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt*/}
      <img
        src={contentUrl}
        alt="The image you uploaded"
        style={{
          maxWidth: "100%",
          maxHeight: "calc(40vh)",
          boxShadow: "0 0 1px rgba(0, 0, 0, 0.5)",
          marginBottom: "16px",
        }}
      />
      <ControlGroup fill={true}>
        <FormGroup
          label={`Please describe what is on this image.`}
          labelFor={`imagecaption-${uuid}`}
          style={{ display: "flex" }}
        >
          <InputGroup
            id={`imagecaption-${uuid}`}
            placeholder=""
            large={true}
            onChange={onChangeCaption}
            pattern="[\w\d_-]+"
          />
        </FormGroup>
      </ControlGroup>
      <ControlGroup style={{}}>
        <Button
          intent="danger"
          icon="trash"
          outlined={true}
          onClick={onRemoveImage}
          large={true}
        >
          Remove image
        </Button>
      </ControlGroup>
    </Card>
  );
}

function showUploadingState(uuid: string) {
  AppToaster.show(
    {
      message: <>Uploading image</>,
      icon: (
        <ControlGroup style={{ alignSelf: "center", marginLeft: "8px" }}>
          <Spinner size={Spinner.SIZE_SMALL} />
        </ControlGroup>
      ),
      timeout: 0,
    },
    uuid
  );
}

function showPersistentErrorToast(message: string, uuid: string) {
  AppToaster.show({ message, intent: "danger", timeout: 0 }, uuid);
}

export default function FileUploadField(props: Props) {
  const { value, schemaKey, relevant, readonly } = props;

  const context = React.useContext(ODKSurveyContext);
  const { onChangeAnswer } = context;
  const [uuid] = React.useState(getUUID());

  const onChangeCaption = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const caption = event.currentTarget.value;
      onChangeAnswer({ ...value, caption }, props);
    },
    [onChangeAnswer, props, value]
  );

  const onRemoveImage = React.useCallback(() => {
    onChangeAnswer(undefined, props);
  }, [onChangeAnswer, props]);

  const onInputChange = React.useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const file = event.currentTarget.files?.[0];
      if (!file) {
        onRemoveImage();
        return;
      }

      showUploadingState(uuid);

      onChangeAnswer(createImageObjectFromFile(file), props);

      uploadPhoto(uuid, file)
        .then((responseBody) => {
          if (!responseBody.success) {
            const message = `Sorry, your upload failed: ${String(
              responseBody.error
            )}`;
            showPersistentErrorToast(message, uuid);
            throw new Error(message);
          }
          if (!responseBody.result) {
            const message = "Sorry, your upload failed: Empty server response.";
            showPersistentErrorToast(message, uuid);
            throw new Error(message);
          }
          onChangeAnswer(
            createImageObjectFromAccessibilityCloudImage(responseBody.result),
            props
          );
          AppToaster.show(
            { message: "Upload successful!", intent: "success", timeout: 5000 },
            uuid
          );
        })
        .catch((reason) => {
          debugger;
          const message = `Sorry, your upload failed: ${reason}`;
          console.error(message);
          showPersistentErrorToast(message, uuid);
          onRemoveImage();
        });
    },
    [uuid, onChangeAnswer, props, onRemoveImage]
  );

  const image = value && (
    <ImageCard
      {...{
        contentUrl: value.contentUrl,
        onChangeCaption,
        onRemoveImage,
        uuid,
      }}
    />
  );

  return (
    <>
      {!value && (
        <FileInput
          id={schemaKey}
          disabled={relevant === false || readonly}
          large={true}
          onInputChange={onInputChange}
          inputProps={{ multiple: false, accept: "image/jpeg, image/png" }}
        />
      )}

      {image}
    </>
  );
}
