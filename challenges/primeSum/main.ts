export const twoPrimesSumtoValue = (input: number): Array<number> => {
  if (input % 2 !== 0) {
    throw new Error("The input number mus be even.");
  }
  const possiblePrimes = getAllPrimesUntilMax(input - 2);
  let possiblePrimeCombinations: Array<Array<number>> = [];
  possiblePrimes.forEach((prime) => {
    if (possiblePrimes.includes(input - prime)) {
      possiblePrimeCombinations.push([input - prime, prime].sort());
    }
  });
  possiblePrimeCombinations.sort((a, b) => {
    return JSON.stringify(a) > JSON.stringify(b) ? 1 : -1;
  })[0];
  return possiblePrimeCombinations[0];
};

function getAllPrimesUntilMax(max: number): Array<number> {
  // Sieve of Eratosthenes
  const isPrime = new Array(max + 1);
  for (let i = 2; i <= max; i++) {
    isPrime[i] = true;
  }
  for (let i = 2; i <= max; i++) {
    if (isPrime[i]) {
      for (let j = i * 2; j <= max; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime
    .map((value, index) => (value ? index : undefined))
    .filter(notUndefined);
}

// manual type guard to remove undefined from type
function notUndefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}
