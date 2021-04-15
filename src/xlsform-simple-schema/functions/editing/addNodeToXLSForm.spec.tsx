import { addNodeToXLSForm } from "./addNodeToXLSForm";
import createEmptyXLSForm from "./createEmptyXLSForm";
import { resetUntitledFieldCounter } from "./createUntitledFieldRow";
import { resetUntitledGroupCounter } from "./createUntitledGroupRows";

describe("addNodeToXLSForm()", () => {
  beforeEach(() => {
    resetUntitledGroupCounter();
    resetUntitledFieldCounter();
  });
  describe("with an empty survey", () => {
    it("adds a nested text field at the beginning", async () => {
      const xlsForm = await createEmptyXLSForm();

      const [
        {
          worksheets: { survey },
        },
      ] = addNodeToXLSForm({
        xlsForm,
        group: true,
        position: "before",
        fieldType: "text",
      });

      expect(survey.rows).toMatchInlineSnapshot(`
        Array [
          Object {
            "label": Object {
              "English (en)": "",
            },
            "name": "untitled_group_1",
            "type": "begin_group",
          },
          Object {
            "label": Object {
              "English (en)": "",
            },
            "name": "untitled_field_0",
            "type": "text",
          },
          Object {
            "type": "end_group",
          },
        ]
      `);
    });

    it("adds a text field at the beginning", async () => {
      const xlsForm = await createEmptyXLSForm();

      const [
        {
          worksheets: { survey },
        },
      ] = addNodeToXLSForm({
        xlsForm,
        group: false,
        position: "before",
        fieldType: "text",
      });

      expect(survey.rows).toMatchInlineSnapshot(`
        Array [
          Object {
            "label": Object {
              "English (en)": "",
            },
            "name": "untitled_field_0",
            "type": "text",
          },
        ]
      `);
    });

    it("adds fields relative to other nodes", async () => {
      const xlsForm = await createEmptyXLSForm();

      // Add a new field at the beginning
      const withFirstField = addNodeToXLSForm({
        xlsForm,
        group: false,
        position: "before",
        fieldType: "text",
        name: "start_field",
      })[0];

      // Insert a new field before the first field
      const withSecondField = addNodeToXLSForm({
        xlsForm: withFirstField,
        group: false,
        position: "before",
        fieldType: "text",
        node: withFirstField.rootSurveyGroup.children[0],
        name: "field_before_start_field",
      })[0];

      // Add a new field (nested inside a group) after the first (now moved) field
      const withThirdGroupedField = addNodeToXLSForm({
        xlsForm: withSecondField,
        group: true,
        position: "after",
        fieldType: "text",
        node: withSecondField.rootSurveyGroup.children[1],
        name: "first_field_inside_group",
        groupName: "group_after_start_field",
      })[0];

      // Add a new field inside the group created before
      const withFourthFieldInsideGroup = addNodeToXLSForm({
        xlsForm: withThirdGroupedField,
        group: false,
        position: "inside",
        fieldType: "text",
        node: withThirdGroupedField.rootSurveyGroup.children[2],
        name: "second_field_inside_group",
      })[0];

      const {
        worksheets: { survey },
      } = withFourthFieldInsideGroup;

      expect(survey.rows).toMatchInlineSnapshot(`
        Array [
          Object {
            "label": Object {
              "English (en)": "",
            },
            "name": "field_before_start_field",
            "type": "text",
          },
          Object {
            "label": Object {
              "English (en)": "",
            },
            "name": "start_field",
            "type": "text",
          },
          Object {
            "label": Object {
              "English (en)": "",
            },
            "name": "group_after_start_field",
            "type": "begin_group",
          },
          Object {
            "label": Object {
              "English (en)": "",
            },
            "name": "second_field_inside_group",
            "type": "text",
          },
          Object {
            "label": Object {
              "English (en)": "",
            },
            "name": "first_field_inside_group",
            "type": "text",
          },
          Object {
            "type": "end_group",
          },
        ]
      `);
    });
  });
});
