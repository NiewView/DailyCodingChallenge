import { longestConsecutiveSequence } from "./main";

describe("staircases", () => {
  test("[100, 4, 200, 1, 3, 2]", () => {
    expect(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])).toBe([
      1,
      2,
      3,
      4,
    ]);
  });
  test("[2, 20, 4, 3, 10]", () => {
    expect(longestConsecutiveSequence([2, 20, 4, 3, 10])).toBe([2, 3, 4]);
  });
  test("[-2, -1, 4, 3, 10]", () => {
    expect(longestConsecutiveSequence([-2, -1, 4, 3, 10])).toBe([-2, -1]);
  });
});
