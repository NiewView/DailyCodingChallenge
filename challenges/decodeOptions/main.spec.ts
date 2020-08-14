import { getDecodingOptions } from "./main";

describe("decodeOptions", () => {
  test("check for '111'", () => {
    expect(getDecodingOptions("111")).toBe(3);
  });
  test("check for '26'", () => {
    expect(getDecodingOptions("26")).toBe(2);
  });
  test("check for '1'", () => {
    expect(getDecodingOptions("1")).toBe(1);
  });
  test("check for '6523'", () => {
    expect(getDecodingOptions("6523")).toBe(2);
  });
  test("check for '2222'", () => {
    expect(getDecodingOptions("2222")).toBe(5);
  });
});
