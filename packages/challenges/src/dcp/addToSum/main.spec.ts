import { doTwoNumbersAddUpToSum } from "./main";

describe("doTwoNumbersAddToSum", () => {
  test("check with [10, 15, 3, 7]", () => {
    const inputArr = [10, 15, 3, 7];
    expect(doTwoNumbersAddUpToSum(inputArr, 15)).toBe(false);
    expect(doTwoNumbersAddUpToSum(inputArr, 1)).toBe(false);
    expect(doTwoNumbersAddUpToSum(inputArr, 0)).toBe(false);
    expect(doTwoNumbersAddUpToSum(inputArr, 12)).toBe(false);
    expect(doTwoNumbersAddUpToSum(inputArr, 17)).toBe(true);
    expect(doTwoNumbersAddUpToSum(inputArr, 25)).toBe(true);
    expect(doTwoNumbersAddUpToSum(inputArr, 10)).toBe(true);
  });
});
