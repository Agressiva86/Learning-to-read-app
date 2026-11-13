import { SYLLABLE_GROUPS, syllablePages } from "./syllable-chart";

describe("sylaby", () => {
  it("ma kategorię na każdą głoskę z listy", () => {
    expect(SYLLABLE_GROUPS.map((item) => item.title)).toEqual([
      "Sylaby na B",
      "Sylaby na C",
      "Sylaby na CZ",
      "Sylaby na D",
      "Sylaby na DZ",
      "Sylaby na DŹ",
      "Sylaby na DŻ",
      "Sylaby na F",
      "Sylaby na G",
      "Sylaby na H",
      "Sylaby na CH",
      "Sylaby na J",
      "Sylaby na K",
      "Sylaby na L",
      "Sylaby na Ł",
      "Sylaby na M",
      "Sylaby na N",
      "Sylaby na P",
      "Sylaby na R",
      "Sylaby na RZ (i Ż)",
      "Sylaby na S",
      "Sylaby na SZ",
      "Sylaby na T",
      "Sylaby na W",
      "Sylaby na Z",
    ]);
  });

  it("zapisuje DŹ, DŻ i Ż zwykłą polską pisownią", () => {
    const find = (id: string) => SYLLABLE_GROUPS.find((item) => item.id === id)?.rows.flat();
    expect(find("dz-acute")).toEqual(["Dzia", "Dzie", "Dzi", "Dzio", "Dziu"]);
    expect(find("dzh")).toEqual(["Dża", "Dże", "Dżi", "Dżo", "Dżu", "Dży"]);
    expect(find("rz")).toEqual(["Rza", "Rze", "Rzi", "Rzo", "Rzu", "Rzy", "Ża", "Że", "Żi", "Żo", "Żu", "Ży"]);
  });

  it("układa kategorie na kartkach bez dzielenia grupy", () => {
    const pages = syllablePages();
    const flat = pages.flat();
    expect(flat).toEqual(SYLLABLE_GROUPS);
    expect(pages.length).toBeGreaterThan(1);
    expect(pages.at(-1)!.length).toBeGreaterThan(1);
    expect(new Set(flat.map((item) => item.id)).size).toBe(SYLLABLE_GROUPS.length);
  });
});
