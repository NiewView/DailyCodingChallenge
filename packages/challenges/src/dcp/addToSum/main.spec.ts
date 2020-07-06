import { findFirstMissingPositiveInteger } from "./main";

describe("findFirstMissingPositiveInteger", () => {
  test("check with [3, 4, -1, 1]", () => {
    expect(findFirstMissingPositiveInteger([3, 4, -1, 1])).toBe(2);
    expect(findFirstMissingPositiveInteger([1,2,0])).toBe(3);
    expect(findFirstMissingPositiveInteger([-1,1,2,0,3,4,-9,10])).toBe(5);
  });
});
