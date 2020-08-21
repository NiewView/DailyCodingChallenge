export function getHighestSumContinousArray(input: Array<number>): number {
  if (input.length === 0) {
    return NaN;
  }

  let potentialHighestSums: Array<number> = [input[0]];
  let currentSum = input[0];
  for (let index = 1; index < input.length; index++) {
    const element = input[index];
    if (currentSum < 0) {
      potentialHighestSums.push(currentSum);
      currentSum = element;
    } else if (element < 0) {
      potentialHighestSums.push(currentSum);
      currentSum += element;
    } else {
      currentSum += element;
    }
  }
  potentialHighestSums.push(currentSum)
  return Math.max(...potentialHighestSums);
}
