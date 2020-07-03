export function getUniqueWaysToClimbStaircase(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  return (
    getUniqueWaysToClimbStaircase(n - 1) + getUniqueWaysToClimbStaircase(n - 2)
  );
}

export function getUniqueWaysToClimbStaircase_Iterative(n) {
  if (n < 1) {
    return null;
  }

  if (n === 1) {
    return 1;
  }
  let previous = 1,
    current = 2;
  for (let i = 0; i < n - 2; i++) {
    let c = previous;
    previous = current;
    current = current + c;
  }

  return current;
}

export function getUniqueWaysToClimbStaircase_Advanced(n, stepsizes) {
  stepsizes = stepsizes.sort((a, b) => a - b);

  if (stepsizes.length <= 0 || n < stepsizes[0]) {
    return null;
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
      sum += getUniqueWaysToClimbStaircase_Advanced(n - stepsize, stepsizes);
    }
  }

  return sum;
}
