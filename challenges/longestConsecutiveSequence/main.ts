export function longestConsecutiveSequence(input: Array<number>): number {
  let maxLength: number = 0; // store maxLength directly to avoid search for maxValue afterwards
  let boundaries: Map<number, number> = new Map();

  if (input.length === 0) {
    return 0;
  }

  const addValueToBoundary = (newValue: number) => {
    let boundaryDifference = 0;
    let upperBoundary: number = boundaries.get(newValue + 1)!;
    let lowerBoundary: number = boundaries.get(newValue - 1)!;

    const canAppendValueToLowerBound =
      boundaries.has(newValue + 1) && boundaries.get(newValue + 1)! > newValue;
    const canAppendValueToUpperBound =
      boundaries.has(newValue - 1) && boundaries.get(newValue - 1)! < newValue;

    if (canAppendValueToLowerBound && !canAppendValueToUpperBound) {
      lowerBoundary = newValue;
    }
    if (canAppendValueToUpperBound && !canAppendValueToLowerBound) {
      upperBoundary = newValue;
    }

    if (!canAppendValueToUpperBound && !canAppendValueToLowerBound) {
      // add value as new boundaries. boundaryDifference would be 0
      boundaries.set(newValue, newValue);
    } else {
      // update existing boundaries
      boundaries.delete(newValue - 1);
      boundaries.delete(newValue + 1);
      boundaries.set(upperBoundary, lowerBoundary);
      boundaries.set(lowerBoundary, upperBoundary);
      boundaryDifference = upperBoundary - lowerBoundary;
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
