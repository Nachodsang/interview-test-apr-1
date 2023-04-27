function calDifference(msg: string): number {
  // vowels defined
  const vowels: string[] = ["a", "e", "i", "o", "u"];
  let consonantAmount: number = 0;
  let vowelAmount: number = 0;

  for (let i: number = 0; i < msg.length; i++) {
    const character: string = msg[i].toLowerCase();
    // checking if it's vowel or consonant
    if (vowels.includes(character)) {
      vowelAmount++;
    } else if (character >= "a" && character <= "z") {
      consonantAmount++;
    }
  }
  const result: number = Math.abs(consonantAmount - vowelAmount);
  console.log(result);
  return result;
}

calDifference("Astrobytes rr  !!");
