const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const drawNumbers = (limit = 6) => {
  const selected = [];
  while (selected.length < limit) {
    const index = Math.floor(Math.random() * numbers.length);
    const selected_number = numbers[index];
    if (selected.indexOf(selected_number) === -1) {
      selected.push(selected_number);
    }
  }

  return selected;
};

const compareBets = (randomDraw, userBets) => {
  const wonBets = [];
  const drawNumbers = randomDraw.numbers
  userBets.forEach((bet)=>{
    const betNumbers = bet.numbers;
    const numb = betNumbers.filter((number)=>{
      return drawNumbers.includes(number)
    })
    if()
  })
};

compareBets()