import { doMultipleNumbersAddUpToSum } from "./main";

describe("multipleAddToSum", () => {
  test("check with [12, 1, 61, 5, 9, 2]", () => {
    const inputArr = [12, 1, 61, 5, 9, 2];
    expect(doMultipleNumbersAddUpToSum(inputArr, 24)).toStrictEqual([
      12,
      1,
      9,
      2,
    ]);
  });

  test("check with [12, 1, 61, 5, 9, 2]", () => {
    const inputArr = [12, 1, 61, 5, 9, 2];
    expect(doMultipleNumbersAddUpToSum(inputArr, 7)).toStrictEqual([5, 2]);
  });
});
