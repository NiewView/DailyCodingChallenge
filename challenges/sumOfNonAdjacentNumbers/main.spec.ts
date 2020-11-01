import { nextTick } from "process";
import { sumOfNonAdjacentNumbers } from "./main";

describe("sumOfNonAdjacentNumbers", () => {
  test("[2, 4, 6, 2, 5]", () => {
    expect(sumOfNonAdjacentNumbers([2, 4, 6, 2, 5])).toBe(13);
  });
  test("[5, 1, 1, 5]", () => {
    expect(sumOfNonAdjacentNumbers([5, 1, 1, 5])).toBe(10);
  });
  test("[3, 7, 2, -2, 1, -3, 6, 1]", () => {
    expect(sumOfNonAdjacentNumbers([3, 7, 2, -2, 1, -3, 6, 1])).toBe(14);
  });
  test("[1, 7, 8, 1, 1, 6, 0, 1, -5]", () => {
    expect(sumOfNonAdjacentNumbers([1, 7, 8, 1, 1, 6, 0, 1, -5])).toBe(16);
  });
  test("[1, 7, 8, 1, 1, 6, 0, 1, -5]", () => {
    expect(sumOfNonAdjacentNumbers([1, 7, 8, 3, 4, 6, 5, 1, -5])).toBe(18);
  });
});
