// Honestly I had some real problems solving this challenge.
// The issue was, that I was focusing on selecting specific numbers, instead of optimizing the overall sum.
// In my opinion this is a pretty common trap to try replicating how a human solves the problem, instead of optimizing for the goal.
// I'm trying to avoid this habit, but every now and then it comes through.
// If you're stuck with a problem try to take a step back and analyze the 'instructions' very carefully and try to focus on the final goal.

export function sumOfNonAdjacentNumbers(input: Array<number>): number {
  let sumIncluding = 0;
  let sumExcluding = 0;

  input.forEach((value) => {
    // One of variables would be enough, second one is only added for better readability
    let previousSumIncluding = sumIncluding;
    let previousSumExcluding = sumExcluding;

    sumIncluding = sumExcluding + value;
    sumExcluding = Math.max(previousSumIncluding, previousSumExcluding);
  });

  return Math.max(sumIncluding, sumExcluding);
}
