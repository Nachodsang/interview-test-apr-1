function getHandScore(input: string): number {
  const cardValue: { [key: string]: number } = {
    A: 11,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 10,
    Q: 10,
    K: 10,
  };
  const cardsArr: string[] = input.split(" ");

  let handScore: number = 0;
  const sumBySuit: { [key: string]: number } = {};

  //   array of obj for hand
  const cardObjArr = cardsArr.map((item) => {
    return {
      suit: item[0],
      value: cardValue[item.slice(1)],
      face: item.slice(1),
    };
  });

  cardObjArr.forEach((i) => {
    //   sum of hand grouped by suit
    const { suit, value, face } = i;
    sumBySuit[suit] = (sumBySuit[suit] || 0) + value;

    // check if tripple
    if (face === cardObjArr[0].face) {
      // check if tripple A
      if (face === "A") {
        handScore = 35;
      } else {
        handScore = 32.5;
      }
    } else {
      // finding the biggest value from each suit
      let biggest: string | null = null;

      for (let prop in sumBySuit) {
        if (biggest === null || sumBySuit[prop] > sumBySuit[biggest]) {
          biggest = prop;
        }
        handScore = sumBySuit[biggest];
      }
    }
  });

  console.log(handScore);
  return handScore;
}

getHandScore("SA DA HA");
