import { findFirstMissingPositiveInteger } from "./main";

describe("firstMissingPositiveInt", () => {
  test("check with [3, 4, -1, 1]", () => {
    expect(findFirstMissingPositiveInteger([3, 4, -1, 1])).toBe(2);
  });
  test("check with [1,2,0]", () => {
    expect(findFirstMissingPositiveInteger([1, 2, 0])).toBe(3);
  });
  test("check with [-1,1,2,0,3,4,-9,10]", () => {
    expect(findFirstMissingPositiveInteger([-1, 1, 2, 0, 3, 4, -9, 10])).toBe(
      5
    );
  });
});
