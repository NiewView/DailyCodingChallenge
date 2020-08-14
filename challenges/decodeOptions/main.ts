export function getDecodingOptions(
  input: string
): number {
  if(input.length >= 2){
    return checkDecoding(input, 2) + checkDecoding(input, 1);
  } else if(input.length >= 1){
    return checkDecoding(input, 1);
  }else{
    return 0;
  }
}

function checkDecoding(input:string, amountOfChars: number):number{
  if(validChars.has(input.substring(0,amountOfChars))){
    let newString = input.substring(amountOfChars);
    if(newString.length >= 2){
      return checkDecoding(newString, 2) + checkDecoding(newString, 1);
    } else if(newString.length >= 1){
      return checkDecoding(newString, 1);
    }else{
      return 1;
    }
  }
  return 0;
}


const validChars = new Set<string>(Array.from(Array(26), (_, i) => (i + 1).toString(10)))