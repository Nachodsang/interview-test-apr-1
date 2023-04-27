const getHandScore = (cards) => {
  const cardValue = {
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
  const cardsArr = cards.split(" ");

  let handScore = 0;
  const sumBySuit = {};

  //   array of obj for hand
  const cardObjArr = cardsArr.map((item, index) => {
    return {
      suit: item[0],
      value: cardValue[item.slice(1)],
      number: item.slice(1),
    };
  });

  cardObjArr.forEach((i) => {
    //   sum of hand grouped by suit
    const { suit, value, number } = i;
    sumBySuit[suit] = (sumBySuit[suit] || 0) + value;

    // check if tripple
    if (number === cardObjArr[0].number) {
      // check if tripple A
      if (number === "A") {
        handScore = 35;
      } else {
        handScore = 32.5;
      }
    } else {
      // finding the biggest value from each suit
      let biggest = null;

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
};

getHandScore("SA DA HA");
