export const productExceptIndex = (input: Array<number>) => {
  const product = input.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
  return input.map((value) => product / value);
};

export const productExceptIndexWithoutDivision = (input: Array<number>) => {
  return input.map((value, index) => {
    const copiedInput = [...input];
    copiedInput.splice(index, 1);
    return copiedInput.reduce(
      (accumulator, currentValue) => accumulator * currentValue,
      1
    );
  });
};
