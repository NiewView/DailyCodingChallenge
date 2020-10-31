export function longestConsecutiveSequence(input: Array<number>): number {
  let maxLength: number = 0; // store maxLength directly to avoid search for maxValue afterwards
  let boundaries: Map<number, number> = new Map();
  const addValueToBoundary = (newValue: number) => {
    const canAppendValueToLowerBound = boundaries.has(newValue + 1);
    const canAppendValueToUpperBound = boundaries.has(newValue - 1);
    let boundaryDifference = 0;

    if (canAppendValueToLowerBound && canAppendValueToUpperBound) {
      const boundaryOne: number = boundaries.get(newValue + 1)!;
      const boundaryTwo: number = boundaries.get(newValue - 1)!;
      boundaries.delete(newValue - 1);
      boundaries.delete(newValue + 1);
      boundaries.set(boundaryOne, boundaryTwo);
      boundaries.set(boundaryTwo, boundaryOne);
      boundaryDifference = boundaryOne - boundaryTwo;
    } else {
      if (canAppendValueToLowerBound) {
        const boundaryOne: number = boundaries.get(newValue + 1)!;
        const boundaryTwo: number = newValue;
        const isLowerBound = boundaryOne > boundaryTwo;
        if (isLowerBound) {
          boundaries.delete(newValue + 1);
          boundaries.set(boundaryTwo, boundaryOne);
          boundaries.set(boundaryOne, boundaryTwo);
        }
        boundaryDifference = boundaryOne - boundaryTwo;
      }
      if (canAppendValueToUpperBound) {
        const boundaryOne = boundaries.get(newValue - 1)!;
        const boundaryTwo: number = newValue;
        const isUpperBound = boundaryOne <= newValue - 1;
        if (isUpperBound) {
          boundaries.delete(newValue - 1);
          boundaries.set(boundaryTwo, boundaryOne);
          boundaries.set(boundaryOne, boundaryTwo);
        }
        boundaryDifference = boundaryOne - boundaryTwo;
      }
    }

    // add value as new boundaries
    if (!canAppendValueToUpperBound && !canAppendValueToLowerBound) {
      boundaries.set(newValue, newValue);
    }

    // add 1, because the amount of numbers is asked not difference
    return Math.abs(boundaryDifference) + 1;
  };
  // Save length as Object, so it is saved by reference
  input.forEach((value) => {
    const newDistance = addValueToBoundary(value);
    if (newDistance > maxLength) {
      maxLength = newDistance;
    }
  });
  return maxLength;
}
