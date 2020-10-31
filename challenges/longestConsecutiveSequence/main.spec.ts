import { longestConsecutiveSequence } from "./main";

describe("staircases", () => {
  test("[100, 4, 200, 1, 3, 2]", () => {
    // 1-4
    expect(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])).toBe(4);
  });
  test("[2, 20, 4, 3, 10]", () => {
    // 2-4
    expect(longestConsecutiveSequence([2, 20, 4, 3, 10])).toBe(3);
  });
  test("[-2, -1, 4, 3, 10]", () => {
    // (-1)-(-2) || 3-4
    expect(longestConsecutiveSequence([-2, -1, 4, 3, 10])).toBe(2);
  });
  test("[1,2,-2, -1, 0, 3]", () => {
    // (-2)-3
    expect(longestConsecutiveSequence([1, 2, -2, -1, 0, 3])).toBe(6);
  });

  test("[1,3,5,7,9,-1]", () => {
    // single number
    expect(longestConsecutiveSequence([1, 3, 5, 7, 9, -1])).toBe(1);
  });

  test("empty array", () => {
    // empty array
    expect(longestConsecutiveSequence([])).toBe(0);
  });
});
