import { doTwoNumbersAddUpToSum } from "./main";

describe("twoAddToSum", () => {
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

  test("check with [9, 5, 3, -3]", () => {
    const inputArr = [9, 5, 3, -3];
    expect(doTwoNumbersAddUpToSum(inputArr, 15)).toBe(false);
    expect(doTwoNumbersAddUpToSum(inputArr, 1)).toBe(false);
    expect(doTwoNumbersAddUpToSum(inputArr, 0)).toBe(true);
    expect(doTwoNumbersAddUpToSum(inputArr, 12)).toBe(true);
    expect(doTwoNumbersAddUpToSum(inputArr, 17)).toBe(false);
    expect(doTwoNumbersAddUpToSum(inputArr, 14)).toBe(true);
    expect(doTwoNumbersAddUpToSum(inputArr, 6)).toBe(true);
  });
});
