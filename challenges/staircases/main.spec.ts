import { getUniqueWaysToClimbStaircase } from "./main";

describe("staircases", () => {
  test("check for 1 and 2 climbs", () => {
    expect(getUniqueWaysToClimbStaircase(1)).toBe(1);
    expect(getUniqueWaysToClimbStaircase(2)).toBe(2);
    expect(getUniqueWaysToClimbStaircase(3)).toBe(3);
    expect(getUniqueWaysToClimbStaircase(4)).toBe(5);
    expect(getUniqueWaysToClimbStaircase(6)).toBe(13);
    expect(getUniqueWaysToClimbStaircase(18)).toBe(4181);
  });
  test("check for 1, 3 and 5 climbs", () => {
    expect(getUniqueWaysToClimbStaircase(1, [1, 3, 5])).toBe(1);
    expect(getUniqueWaysToClimbStaircase(2, [1, 3, 5])).toBe(1);
    expect(getUniqueWaysToClimbStaircase(3, [1, 3, 5])).toBe(2);
    expect(getUniqueWaysToClimbStaircase(5, [1, 3, 5])).toBe(5);
  });
});
