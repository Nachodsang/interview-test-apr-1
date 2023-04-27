const isDigisible = (number) => {
  const strNumber = number.toString();
  const arrNumber = strNumber.split("");
  const setNumber = new Set(arrNumber);

  let result = true;
  // all different numbers
  // no zero
  if (arrNumber.includes("0") || setNumber.size !== arrNumber.length) {
    result = false;
  }
  // divisible by each digits
  for (let i = 0; i < arrNumber.length; i++) {
    const digit = +arrNumber[i];
    if (number % digit !== 0) {
      result = false;
    }
  }
  console.log(result);
  return result;
};

isDigisible(396);
