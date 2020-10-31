import { twoPrimesSumtoValue } from "./main";

const inputs = [8, 156, 14, 62, 1568, 352, 4];

describe("primeSum", () => {
  inputs.forEach((input) => {
    test(`should return two values, that sum up to input '${input}'`, () => {
      expect(
        twoPrimesSumtoValue(input).reduce(
          (previous, current) => previous + current,
          0
        )
      ).toStrictEqual(input);
    });
  });

  inputs.forEach((input) => {
    test(`should return two primes ${input}`, () => {
      const result = twoPrimesSumtoValue(input);
      expect(isPrime(result[0])).toBeTruthy();
      expect(isPrime(result[1])).toBeTruthy();
    });
  });

  test("should return correct result for specific values", () => {
    expect(twoPrimesSumtoValue(8)).toStrictEqual([3, 5]);
    expect(twoPrimesSumtoValue(50)).toStrictEqual([13, 37]);
    expect(twoPrimesSumtoValue(84)).toStrictEqual([11, 73]);
    expect(twoPrimesSumtoValue(90)).toStrictEqual([11, 79]);
  });
});

const isPrime = (input: number) => {
  for (let i = 2, s = Math.sqrt(input); i <= s; i++)
    if (input % i === 0) return false;
  return input > 1;
};
