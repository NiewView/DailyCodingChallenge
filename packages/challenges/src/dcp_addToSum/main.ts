export const doTwoNumbersAddUpToSum = (
  inputArr: number[],
  expectedSum: number
): boolean => {
  let output = false;
  for (let index = 0; index < inputArr.length; index++) {
    const element = inputArr[index];
    for (let index2 = 0; index2 < inputArr.length; index2++) {
      if (index2 === index) {
        continue;
      }
      const element2 = inputArr[index2];
      if (element + element2 === expectedSum) {
        return true;
      }
    }
  }
  return output;
};
