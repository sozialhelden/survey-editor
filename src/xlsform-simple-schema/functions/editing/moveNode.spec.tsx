import { AssertionError } from "assert";
import { ODKNode } from "../../types/ODKNode";
import { XLSForm } from "../../types/XLSForm";
import loadFormFromXLSXFile from "../loadFormFromXLSXFile";
import { findNodeByPathRelativeToScope } from "../odk-formulas/evaluation/XPath";
import { moveNode } from "./moveNode";

async function getTestData() {
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

  const outsideNode = findNodeByPathRelativeToScope(
    ["data", "outside"],
    xlsForm.rootSurveyGroup
  );
  assertSingleODKNode(outsideNode);

  const insideNode = findNodeByPathRelativeToScope(
    ["data", "inside"],
    xlsForm.rootSurveyGroup
  );
  assertSingleODKNode(insideNode);

  const topCategoryNode = findNodeByPathRelativeToScope(
    ["data", "outside", "category", "category_top"],
    xlsForm.rootSurveyGroup
  );
  assertSingleODKNode(topCategoryNode);

  const subCategoryNode = findNodeByPathRelativeToScope(
    ["data", "outside", "category", "category_sub"],
    xlsForm.rootSurveyGroup
  );
  assertSingleODKNode(subCategoryNode);

  return { xlsForm, insideNode, outsideNode, topCategoryNode, subCategoryNode };
}

function assertSingleODKNode(
  node?: ODKNode | ODKNode[]
): asserts node is ODKNode {
  if (!node) {
    throw new AssertionError({
      message: "Expected a node.",
    });
  }
  if (node instanceof Array) {
    throw new AssertionError({
      message: "Expected only one node to be found.",
    });
  }
}

describe("moveNode()", () => {
  it("returns false when moving a group node into itself", async () => {
    const { xlsForm, subCategoryNode, outsideNode } = await getTestData();

    const result = moveNode({
      xlsForm,
      sourceNode: outsideNode,
      destinationNode: subCategoryNode,
    });

    expect(result).toBe(false);
  });

  describe("moving a field out of its original group", () => {
    let newXLSForm: XLSForm;
    let sourceNode: ODKNode;

    beforeEach(async () => {
      const { xlsForm, subCategoryNode, insideNode } = await getTestData();
      sourceNode = subCategoryNode;

      const result = moveNode({
        xlsForm,
        sourceNode,
        destinationNode: insideNode,
      });

      if (!result) {
        throw new Error("Expected a new XLSForm.");
      }
      newXLSForm = result[0];
    });

    it("removes node from its original group", async () => {
      const removedNode = findNodeByPathRelativeToScope(
        ["data", "outside", "category", "category_sub"],
        newXLSForm.rootSurveyGroup
      );
      expect(removedNode).toBeUndefined();
    });

    it("moves node to an outer group", async () => {
      const newNode = findNodeByPathRelativeToScope(
        ["data", "category_sub"],
        newXLSForm.rootSurveyGroup
      );
      assertSingleODKNode(newNode);
      expect(newNode.row).toMatchObject(sourceNode.row);
      expect(sourceNode.indentationLevel).toBe(2);
      expect(newNode.indentationLevel).toBe(0);
    });

    it("moves node to new position", async () => {
      const newNode = findNodeByPathRelativeToScope(
        ["data", "category_sub"],
        newXLSForm.rootSurveyGroup
      );
      assertSingleODKNode(newNode);
      expect(newNode.rowIndex).toBe(31);
    });
  });

  describe("moving a group", () => {
    let newXLSForm: XLSForm;
    let insideNode: ODKNode;
    let subCategoryNode: ODKNode;

    beforeEach(async () => {
      const { xlsForm, ...testData } = await getTestData();
      insideNode = testData.insideNode;
      subCategoryNode = testData.subCategoryNode;
      const result = moveNode({
        xlsForm,
        sourceNode: insideNode,
        destinationNode: subCategoryNode,
      });
      if (!result) {
        throw new Error("Expected a new XLSForm.");
      }
      newXLSForm = result[0];
    });

    it("removes group from its original group", async () => {
      const removedNode = findNodeByPathRelativeToScope(
        ["data", "inside"],
        newXLSForm.rootSurveyGroup
      );
      expect(removedNode).toBeUndefined();
    });

    it("moves group to new enclosing group", async () => {
      const newNode = findNodeByPathRelativeToScope(
        ["data", "outside", "category", "inside"],
        newXLSForm.rootSurveyGroup
      );
      assertSingleODKNode(newNode);
      expect(newNode.row).toMatchObject(insideNode.row);
      expect(insideNode.indentationLevel).toBe(0);
      expect(newNode.indentationLevel).toBe(2);
    });

    it.only("moves node to new position", async () => {
      const newNode = findNodeByPathRelativeToScope(
        ["data", "outside", "category", "inside"],
        newXLSForm.rootSurveyGroup
      );
      assertSingleODKNode(newNode);
      expect(insideNode.rowIndex).toBe(32);
      expect(newNode.rowIndex).toBe(17);
    });
  });

  test.todo("does not alter the original XLSForm");
  test.todo("It updates XPath references (not implemented yet)");
});
