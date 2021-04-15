import { hospitalSurveyRawData } from "../../../test-data/hospitalSurvey";
import { ODKNode } from "../../../types/ODKNode";
import nestSurvey from "../../nestSurvey";
import {
  findNodeByNameInCurrentAndAncestorScopes,
  findNodeByNameInsideScope,
  findNodeByPathRelativeToScope,
  getNodeAbsolutePath,
} from "./XPath";

function createTestSurvey() {
  const { node: survey } = nestSurvey({
    rows: hospitalSurveyRawData(),
    defaultLanguage: "en-US",
  });
  return { survey };
}

describe("XPath", () => {
  describe("findNodeByNameInsideScope()", () => {
    it("finds a node in a nested survey", () => {
      const { survey } = createTestSurvey();
      const node = findNodeByNameInsideScope(
        "have_hiv_medication",
        survey
      ) as ODKNode;
      expect(node).not.toBeUndefined();
      expect(node).not.toBeInstanceOf(Array);
      expect(node?.row?.name).toBe("have_hiv_medication");
    });

    it("returns `undefined` if the name does not exist", () => {
      const { node: survey } = nestSurvey({
        rows: hospitalSurveyRawData(),
        defaultLanguage: "en-US",
      });
      expect(
        findNodeByNameInsideScope("nonExistingField", survey, survey)
      ).toBeUndefined();
    });

    test.todo("returns an array if multiple nodes match");
  });

  describe("findNodeByNameInCurrentAndAncestorScopes()", () => {
    it("finds a node in an example survey, starting from a grandchild", () => {
      const { survey } = createTestSurvey();
      const startScope = findNodeByNameInsideScope(
        "have_hiv_medication",
        survey
      ) as ODKNode;
      const node = findNodeByNameInCurrentAndAncestorScopes(
        "What is your name?",
        survey,
        startScope
      ) as ODKNode;
      expect(node).not.toBeUndefined();
      expect(node).not.toBeInstanceOf(Array);
      expect(node?.row?.name).toBe("What is your name?");
    });

    it("returns `undefined` if a node with given name does not exist", () => {
      const { survey } = createTestSurvey();
      const startScope = findNodeByNameInsideScope(
        "have_hiv_medication",
        survey
      ) as ODKNode;
      const node = findNodeByNameInCurrentAndAncestorScopes(
        "What is love?",
        survey,
        startScope
      ) as ODKNode;
      expect(node).toBeUndefined();
    });
  });

  describe("findNodeByPathRelativeToScope()", () => {
    it("traverses the hierarchy", () => {
      const { survey } = createTestSurvey();
      const startScope = findNodeByNameInsideScope(
        "have_hiv_medication",
        survey
      ) as ODKNode;

      const selfNode = findNodeByPathRelativeToScope(
        ["."],
        survey,
        startScope
      ) as ODKNode;
      expect(selfNode.row?.name).toBe("have_hiv_medication");

      const parentNode = findNodeByPathRelativeToScope(
        [".."],
        survey,
        startScope
      ) as ODKNode;
      expect(parentNode.row?.name).toBe("hiv_medication");

      const grandparentNode = findNodeByPathRelativeToScope(
        ["..", ".."],
        survey,
        startScope
      ) as ODKNode;
      expect(grandparentNode.row?.name).toBe("hospital");

      const greatgrandparentNode = findNodeByPathRelativeToScope(
        ["..", "..", ".."],
        survey,
        startScope
      ) as ODKNode;
      expect(greatgrandparentNode.row?.name).toBe("data");

      const hospitalNode = findNodeByPathRelativeToScope(
        ["..", "..", "..", "hospital"],
        survey,
        startScope
      ) as ODKNode;
      expect(hospitalNode.row?.name).toBe("hospital");

      const haveHIVMedicationNodeRelative = findNodeByPathRelativeToScope(
        [".", "data", "hospital", "hiv_medication", "have_hiv_medication"],
        survey,
        survey
      ) as ODKNode;
      expect(haveHIVMedicationNodeRelative.row?.name).toBe(
        "have_hiv_medication"
      );

      const haveHIVMedicationNodeAbsolute = findNodeByPathRelativeToScope(
        ["/", "data", "hospital", "hiv_medication", "have_hiv_medication"],
        survey,
        startScope
      ) as ODKNode;

      expect(haveHIVMedicationNodeAbsolute.row?.name).toBe(
        "have_hiv_medication"
      );
    });

    it("throws if trying to go beyond root", () => {
      const { survey } = createTestSurvey();
      const startScope = findNodeByNameInsideScope(
        "have_hiv_medication",
        survey
      ) as ODKNode;
      expect(() =>
        findNodeByPathRelativeToScope(
          ["..", "..", "..", ".."],
          survey,
          startScope
        )
      ).toThrowError(/further up/);
    });

    test.todo("fails if path is invalid");
    test.todo("returns an array if multiple nodes match");
  });

  describe("getNodeAbsolutePath()", () => {
    it('returns "/data" for root', () => {
      const { survey } = createTestSurvey();
      expect(getNodeAbsolutePath(survey, survey)).toEqual(["/", "data"]);
    });

    it("returns a path for a nested node", () => {
      const { survey } = createTestSurvey();
      const node = findNodeByNameInsideScope(
        "have_hiv_medication",
        survey
      ) as ODKNode;

      expect(getNodeAbsolutePath(node, survey)).toEqual([
        "/",
        "data",
        "hospital",
        "hiv_medication",
        "have_hiv_medication",
      ]);
    });
  });
});
