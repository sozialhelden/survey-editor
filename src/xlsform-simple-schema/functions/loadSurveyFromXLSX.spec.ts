import loadFormFromXLSXFile from "./loadFormFromXLSXFile";
import { nestDoubleColonFields } from "./loadSurveyFromXLSX";

describe("loadSurveyFromXLSX()", () => {
  it("loads a complex survey from a exported XLSX", async () => {
    await loadFormFromXLSXFile(
      "src/xlsform-simple-schema/test-data/wheelmap-survey.xlsx"
    );
  });
});

describe("nestDoubleColonFields()", () => {
  it("Replaces non-suffixed properties with suffixed ones", () => {
    const nestedRecord = nestDoubleColonFields(
      {
        label: "A label in default language",
        "label::Deutsch (de)": "Ein Feldtitel auf Deutsch",
      },
      ["label"],
      "English (en)"
    );

    expect(nestedRecord).toEqual({
      foundSuffixes: new Set(["English (en)", "Deutsch (de)"]),
      result: {
        label: {
          "English (en)": "A label in default language",
          "Deutsch (de)": "Ein Feldtitel auf Deutsch",
        },
      },
    });
  });

  it("Leaves properties that do not match the given prefixes alone", () => {
    const nestedRecord = nestDoubleColonFields(
      {
        label: "A label in default language",
        "label::Deutsch (de)": "Ein Feldtitel auf Deutsch",
        "foo::English (en)": "bar",
      },
      ["label"],
      "English (en)"
    );

    expect(nestedRecord).toEqual({
      foundSuffixes: new Set(["English (en)", "Deutsch (de)"]),
      result: {
        label: {
          "English (en)": "A label in default language",
          "Deutsch (de)": "Ein Feldtitel auf Deutsch",
        },
        "foo::English (en)": "bar",
      },
    });
  });

  it("works for bind::attribute", () => {
    const nestedRecord = nestDoubleColonFields(
      {
        label: "A label in default language",
        "label::Deutsch (de)": "Ein Feldtitel auf Deutsch",
        "foo::English (en)": "bar",
        "bind::foo": "bar",
      },
      ["bind"]
    );

    expect(nestedRecord).toEqual({
      foundSuffixes: new Set(["foo"]),
      result: {
        label: "A label in default language",
        "label::Deutsch (de)": "Ein Feldtitel auf Deutsch",
        "foo::English (en)": "bar",
        bind: {
          foo: "bar",
        },
      },
    });
  });

  it("throws for bind without a suffix", () => {
    expect(() =>
      nestDoubleColonFields(
        {
          label: "A label in default language",
          "label::Deutsch (de)": "Ein Feldtitel auf Deutsch",
          "foo::English (en)": "bar",
          bind: "bar",
        },
        ["bind"]
      )
    ).toThrowError(/namespace/);
  });
});
