function isDigisible(n: number): boolean {
  const strNumber: string = n.toString();
  const arrNumber: string[] = strNumber.split("");
  const setNumber: Set<string> = new Set(arrNumber);

  let result: boolean = true;
  // all different numbers
  // no zero
  if (arrNumber.includes("0") || setNumber.size !== arrNumber.length) {
    result = false;
  }
  // divisible by each digits
  for (let i: number = 0; i < arrNumber.length; i++) {
    const digit: number = +arrNumber[i];
    if (n % digit !== 0) {
      result = false;
    }
  }
  console.log(result);
  return result;
}

isDigisible(396);
