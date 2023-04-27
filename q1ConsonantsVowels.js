const calDifference = (msg) => {
  // vowels defined
  const vowels = ["a", "e", "i", "o", "u"];
  let consonantAmount = 0;
  let vowelAmount = 0;

  for (let i = 0; i < msg.length; i++) {
    const character = msg[i].toLowerCase();
    // checking if it's vowel or consonant
    if (vowels.includes(character)) {
      vowelAmount++;
    } else if (character >= "a" && character <= "z") {
      consonantAmount++;
    }
  }
  const result = Math.abs(consonantAmount - vowelAmount);
  console.log(result);
  return result;
};

calDifference("Astrobytes rr  !!");
