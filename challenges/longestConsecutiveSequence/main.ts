export function longestConsecutiveSequence(input: Array<number>): number {
  let maxLength: number = 0; // store maxLength directly to avoid search for maxValue afterwards
  let boundaries: Map<number, number> = new Map();
  const addValueToBoundary = (newValue: number) => {
    if (boundaries.has(newValue + 1)) {
      const otherBoundary = boundaries.get(newValue + 1)!;
      const isLowerBound = otherBoundary >= newValue + 1;
      if (isLowerBound) {
        boundaries.set(newValue, otherBoundary);
        boundaries.delete(newValue + 1);
        boundaries.set(otherBoundary, newValue);
      }
      return Math.abs(newValue - otherBoundary);
    }
    if (boundaries.has(newValue - 1)) {
      const otherBoundary = boundaries.get(newValue - 1)!;
      const isUpperBound = otherBoundary <= newValue - 1;
      if (isUpperBound) {
        boundaries.set(newValue, otherBoundary);
        boundaries.delete(newValue - 1);
        boundaries.set(otherBoundary, newValue);
      }
      return Math.abs(newValue - otherBoundary);
    }

    // add new boundaries
    boundaries.set(newValue, newValue);
    return 1;
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
