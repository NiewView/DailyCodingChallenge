import {
  getUniqueWaysToClimbStaircase,
  getUniqueWaysToClimbStaircase_Iterative,
  getUniqueWaysToClimbStaircase_Advanced,
} from "./temp";

test("check getUniqueWaysToClimbStaircase", () => {
  expect(getUniqueWaysToClimbStaircase(1)).toBe(1);
  expect(getUniqueWaysToClimbStaircase(2)).toBe(2);
  expect(getUniqueWaysToClimbStaircase(3)).toBe(3);
  expect(getUniqueWaysToClimbStaircase(4)).toBe(5);
  expect(getUniqueWaysToClimbStaircase(5)).toBe(8);
  expect(getUniqueWaysToClimbStaircase(6)).toBe(13);
});

test("check getUniqueWaysToClimbStaircase_Iterative", () => {
  expect(getUniqueWaysToClimbStaircase_Iterative(1)).toBe(1);
  expect(getUniqueWaysToClimbStaircase_Iterative(2)).toBe(2);
  expect(getUniqueWaysToClimbStaircase_Iterative(3)).toBe(3);
  expect(getUniqueWaysToClimbStaircase_Iterative(4)).toBe(5);
  expect(getUniqueWaysToClimbStaircase_Iterative(5)).toBe(8);
  expect(getUniqueWaysToClimbStaircase_Iterative(6)).toBe(13);
});

test("check getUniqueWaysToClimbStaircase_Advanced", () => {
  expect(getUniqueWaysToClimbStaircase_Advanced(1, [1, 2])).toBe(1);
  expect(getUniqueWaysToClimbStaircase_Advanced(2, [1, 2])).toBe(2);
  expect(getUniqueWaysToClimbStaircase_Advanced(3, [1, 2])).toBe(3);
  expect(getUniqueWaysToClimbStaircase_Advanced(4, [1, 2])).toBe(5);
  expect(getUniqueWaysToClimbStaircase_Advanced(5, [1, 2])).toBe(8);
  expect(getUniqueWaysToClimbStaircase_Advanced(6, [1, 2])).toBe(13);
});
