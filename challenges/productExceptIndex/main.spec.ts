import { productExceptIndex, productExceptIndexWithoutDivision } from "./main";

describe("productExceptIndex", () => {
  test("should return correct result for example 1", () => {
    expect(productExceptIndex([1, 2, 3, 4, 5])).toStrictEqual([120, 60, 40, 30, 24]);
  });

  test("should return correct result for example 2", () => {
    expect(productExceptIndex([1, 2, 3])).toStrictEqual([6, 3, 2]);
  });
});

describe("productExceptIndex", () => {
  test("should return correct result for example 1 without division", () => {
    expect(productExceptIndexWithoutDivision([1, 2, 3, 4, 5])).toStrictEqual([120, 60, 40, 30, 24]);
  });

  test("should return correct result for example 2 without division", () => {
    expect(productExceptIndexWithoutDivision([1, 2, 3])).toStrictEqual([6, 3, 2]);
  });
});
