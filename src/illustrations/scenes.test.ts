import { ILLUSTRATIONS } from "../data/illustrations";
import { scenes } from "./scenes";

describe("kolorowanki", () => {
  it("ma rysunek dla każdej ilustracji z katalogu", () => {
    for (const id of ILLUSTRATIONS) {
      expect(typeof scenes[id], id).toBe("function");
    }
  });
});
