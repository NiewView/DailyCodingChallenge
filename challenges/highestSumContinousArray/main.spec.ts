import { getHighestSumContinousArray } from "./main";

describe("highestSumContinousArray", () => {
  test("check  [34, -50, 42, 14, -5, 86]", () => {
    expect(getHighestSumContinousArray( [34, -50, 42, 14, -5, 86])).toBe(137);
  });
  test("check  [34, -50, 42, 14, -5]", () => {
    expect(getHighestSumContinousArray([34, -50, 42, 14, -5])).toBe(56);
  });
  test("check  [-1, 32, -10, 25, -45, 1]", () => {
    expect(getHighestSumContinousArray([-1, 32, -10, 25, -45, 1])).toBe(47);
  });
});
