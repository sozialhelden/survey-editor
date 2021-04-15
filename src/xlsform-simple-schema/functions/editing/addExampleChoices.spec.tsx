import addExampleChoices from "./addExampleChoices";
import createEmptyXLSForm from "./createEmptyXLSForm";

describe("addExampleChoices()", () => {
  it("works with an empty survey", async () => {
    const xlsForm = await createEmptyXLSForm();
    const [{ choicesByName, worksheets }] = addExampleChoices(xlsForm);

    expect(choicesByName).toMatchInlineSnapshot(`
      Object {
        "yes_no_maybe": Object {
          "maybe": Object {
            "label": Object {
              "English (en)": "maybe",
            },
            "list name": "yes_no_maybe",
            "name": "maybe",
          },
          "no": Object {
            "label": Object {
              "English (en)": "no",
            },
            "list name": "yes_no_maybe",
            "name": "no",
          },
          "yes": Object {
            "label": Object {
              "English (en)": "yes",
            },
            "list name": "yes_no_maybe",
            "name": "yes",
          },
        },
      }
    `);

    expect(worksheets.choices).toMatchInlineSnapshot(`
      Object {
        "columnNames": Array [
          "list name",
          "name",
          "label",
        ],
        "columnNamesNormalized": Array [
          "list name",
          "name",
          "label",
        ],
        "languages": Set {
          "English (en)",
        },
        "rows": Array [
          Object {
            "label": Object {
              "English (en)": "yes",
            },
            "list name": "yes_no_maybe",
            "name": "yes",
          },
          Object {
            "label": Object {
              "English (en)": "no",
            },
            "list name": "yes_no_maybe",
            "name": "no",
          },
          Object {
            "label": Object {
              "English (en)": "maybe",
            },
            "list name": "yes_no_maybe",
            "name": "maybe",
          },
        ],
      }
    `);
  });
});
