export const isSecondStringShiftedVariantOfFirst = (
  input: string,
  input2: string
): boolean => {
  if (input === input2) {
    return true;
  }

  let shiftedString = input;
  for (let i = 0; i < input.length; i++) {
    shiftedString = shiftedString.substr(1) + shiftedString[0];
    if (shiftedString === input2) {
      return true;
    }
  }
  return false;
};
