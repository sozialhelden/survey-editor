// async function getTestData() {
//   const xlsForm = await loadFormFromXLSXFile(
//     "src/xlsform-simple-schema/test-data/wheelmap-survey.xlsx"
//   );
//   const node = findNodeByPathRelativeToScope(
//     ["data", "outside", "category", "category_top"],
//     xlsForm.rootSurveyGroup
//   );
//   if (!node || node instanceof Array) {
//     throw new AssertionError({
//       message: "Function should return a singular ODKNode",
//     });
//   }

//   return { xlsForm, node };
// }

describe("nestNode()", () => {
  test.todo("nests a field in a new group");
  test.todo("nests a group in a new group");
});

export {};
