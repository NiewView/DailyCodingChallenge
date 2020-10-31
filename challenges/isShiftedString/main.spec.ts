import { isSecondStringShiftedVariantOfFirst } from "./main";

const inputs = [8, 156, 14, 62, 1568, 352, 4];

describe("isShiftedString", () => {
  test(`should return true if it is a shifted version`, () => {
    expect(isSecondStringShiftedVariantOfFirst("abcde", "cdeab")).toBeTruthy();
    expect(isSecondStringShiftedVariantOfFirst("hallo", "alloh")).toBeTruthy();
    expect(isSecondStringShiftedVariantOfFirst("hi", "ih")).toBeTruthy();
    expect(isSecondStringShiftedVariantOfFirst("meter", "meter")).toBeTruthy();
  });

  test(`should return false if characters are shuffled`, () => {
    expect(isSecondStringShiftedVariantOfFirst("abc", "acb")).toBeFalsy();
    expect(isSecondStringShiftedVariantOfFirst("test", "sets")).toBeFalsy();
  });

  test(`should return if characters do not match at all`, () => {
    expect(isSecondStringShiftedVariantOfFirst("check", "ceck")).toBeFalsy();
    expect(isSecondStringShiftedVariantOfFirst("abc", "xyz")).toBeFalsy();
  });
});
