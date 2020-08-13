export const findFirstMissingPositiveInteger = (
  inputArr: number[],
): number => {
  let set = new Set(inputArr);
  for (let i = 1; i < inputArr.length+1; i++) {
    if(!set.has(i)){
      return i;
    }
  }
  throw new Error("an unkown error occured");
};
