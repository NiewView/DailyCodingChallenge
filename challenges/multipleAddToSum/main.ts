// TODO needs some more polish

export const doMultipleNumbersAddUpToSum = (
  inputArr: number[],
  expectedSum: number
): Array<number> | null => {
  let potentialSolutions: Array<solution> = [];
  let result = null;
  for (let index = 0; index < inputArr.length; index++) {
    const element = inputArr[index];
    const previousLength = potentialSolutions.length;
    for (let solIndex = 0; solIndex < previousLength; solIndex++) {
      let potSolution = potentialSolutions[solIndex];
      if (element + potSolution.sum === expectedSum) {
        potSolution.sum += element;
        potSolution.values.push(element);
        return potSolution.values;
      } else if (element + potSolution.sum < expectedSum) {
        potentialSolutions.push({
          sum: element + potSolution.sum,
          values: [...potSolution.values, element],
        });
      }
    }
    if (element == expectedSum) {
      return [element];
    } else if (element < expectedSum) {
      potentialSolutions.push({ sum: element, values: [element] });
    }
  }
  return result;
};

interface solution {
  sum: number;
  values: Array<number>;
}
