export const productExceptIndex = (input: Array<number>) => {
  const product = input.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  return input.map(value => product / value);
}

export const productExceptIndexWithoutDivision = (input: Array<number>) => {
  const product = input
  return input.map((value, index)=>{
    // console.log(input.splice(index, 1).reduce((accumulator, currentValue) => accumulator * currentValue, 1));
    const copiedInput = [...input];
    copiedInput.splice(index, 1);
    console.log(copiedInput)
    return copiedInput.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  })
  // return input.map(value => product / value);
}
