export const doTwoNumbersAddUpToSum = (
  inputArr: number[],
  expectedSum: number
): boolean => {
  const expectedMap = new Map(inputArr.map((i) => [expectedSum - i, true]));
  for (let index = 0; index < inputArr.length; index++) {
    const element = inputArr[index];
    if (expectedMap.has(element)) {
      return true;
    }
  }
  return false;
};
