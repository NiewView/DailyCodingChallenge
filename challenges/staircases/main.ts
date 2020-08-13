export function getUniqueWaysToClimbStaircase(
  n: number,
  stepsizes: number[] = [1, 2]
): number {
  let minStepSize = Math.min(...stepsizes);

  if (stepsizes.length <= 0 || n < minStepSize) {
    throw Error("The number must be positive");
  }

  if (n === stepsizes[0]) {
    return 1;
  }

  let sum = 0;
  for (let i = 0; i < stepsizes.length; i++) {
    const stepsize = stepsizes[i];
    if (stepsize === n) {
      sum += 1;
    }
    if (stepsize < n) {
      sum += getUniqueWaysToClimbStaircase(n - stepsize, stepsizes);
    }
  }

  return sum;
}
