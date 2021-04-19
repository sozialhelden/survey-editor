import { AssertionError } from "assert";
import loadFormFromXLSXFile from "../loadFormFromXLSXFile";
import {
  findNodeByPathRelativeToScope,
  getNodeAbsolutePathString,
} from "../odk-formulas/evaluation/XPath";
import { resetUntitledFieldCounter } from "./createUntitledFieldRow";
import { resetUntitledGroupCounter } from "./createUntitledGroupRows";
import findOrReplaceFieldReferences from "./findOrReplaceFieldReferences";

describe("renameNode()", () => {
  beforeEach(() => {
    resetUntitledGroupCounter();
    resetUntitledFieldCounter();
  });
  describe("with an empty survey", () => {
    it("adds a nested text field at the beginning", async () => {
      const xlsForm = await loadFormFromXLSXFile(
        "src/xlsform-simple-schema/test-data/wheelmap-survey.xlsx"
      );
      const node = findNodeByPathRelativeToScope(
        ["data", "outside", "category", "category_top"],
        xlsForm.rootSurveyGroup
      );
      if (!node || node instanceof Array) {
        throw new AssertionError({
          message: "Function should return a singular ODKNode",
        });
      }

      const nodeDependencies = findOrReplaceFieldReferences(
        xlsForm,
        node!,
        "top_category"
      );

      expect(
        nodeDependencies.map((d) => ({
          columnName: d.columnName,
          index: d.index,
          node: getNodeAbsolutePathString(d.node, xlsForm.rootSurveyGroup),
        }))
      ).toMatchInlineSnapshot(`
        Array [
          Object {
            "columnName": "relevant",
            "index": 17,
            "node": "data.outside.category.category_sub",
          },
          Object {
            "columnName": "relevant",
            "index": 19,
            "node": "data.outside.entrance",
          },
          Object {
            "columnName": "relevant",
            "index": 32,
            "node": "data.inside",
          },
          Object {
            "columnName": "relevant",
            "index": 33,
            "node": "data.inside.has_wide_aisles",
          },
          Object {
            "columnName": "relevant",
            "index": 36,
            "node": "data.inside.toilet.has_toilet",
          },
          Object {
            "columnName": "relevant",
            "index": 37,
            "node": "data.inside.toilet.stepless_access",
          },
        ]
      `);
      // The original XLSForm should not be changed, the old node should still be there

      expect(
        findNodeByPathRelativeToScope(
          ["data", "outside", "category", "top_category"],
          xlsForm.rootSurveyGroup
        )
      ).toBeUndefined();

      expect(
        findNodeByPathRelativeToScope(
          ["data", "outside", "category", "category_top"],
          xlsForm.rootSurveyGroup
        )
      ).toMatchInlineSnapshot(`
      Object {
        "appearance": Object {
          "horizontal": true,
        },
        "children": Array [],
        "indentationLevel": 2,
        "row": Object {
          "appearance": "horizontal",
          "label": Object {
            "Deutsch (de)": "Hauptkategorie",
            "English (en)": "Main category",
          },
          "name": "category_top",
          "required": "true",
          "type": "select_one category_top",
        },
        "rowIndex": 16,
        "type": "select_one",
        "typeParameters": Array [
          "category_top",
        ],
      }
    `);

      expect(nodeDependencies.map((d) => d.node.row[d.columnName]))
        .toMatchInlineSnapshot(`
        Array [
          "\${category_top} != '' and \${category_top} != 'elevator' and \${category_top} != 'escalator' and \${category_top} != 'toilets' and \${category_top} != 'undefined'",
          "\${category_top} != 'escalator' or \${category_top} != 'elevator'",
          "selected(\${user_record_type}, 'inside') and \${category_sub} != 'bus_stop' and \${category_sub} != 'newsagent' and \${category_sub} != 'park' and \${category_sub} != 'public_transport' and \${category_sub} != 'tram_stop' and \${category_top} != 'elevator' and \${category_top} != 'escalator'",
          "\${category_top} != 'transport'",
          "\${category_top} != 'toilets'",
          "\${has_toilet} = 'true' or \${category_top} = 'toilets'",
        ]
      `);
    });
  });
});
