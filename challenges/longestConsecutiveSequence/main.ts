export function longestConsecutiveSequence(input: Array<number>): number {
  let boundaries = new Map();
  const addValueToBoundary = (newValue: number) => {
    if (boundaries.has(newValue + 1)) {
      boundaries.get(newValue);
    }
  };
  let sequenceLength: Array<number> = [];
  input.forEach((value) => {
    if (boundaries.has(value)) {
      sequenceLength[boundaries.get(value)] += 1;
    } else {
    }
  });
  return 0;
}
