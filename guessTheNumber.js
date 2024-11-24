const rangeStart = 1;
const rangeEnd = 10;
const maxAttempts = 3;

function generateNumber() {
  return Math.ceil(Math.random() * 10);
}

function initiateGuessTheNumber(maxAttempts, number) {
  if (maxAttempts < 1) {
    return "\n  Better Luck Next Time!!";
  }

  const userInput = +prompt("\n\n  Enter a Number : ");
  if (userInput === number) {
    return "\n Hurray!! You Guessed the Number!";
  }

  const hint = userInput > number ? "  Too High " : "  Too Low ";
  console.log(hint);

  return initiateGuessTheNumber(maxAttempts - 1, number);
}

function gameInfo() {
  const welMsg = "\n  Welcome to Guess the Number! ";
  const rangeInfo = "\n  The secret number is between 1 and 10.";
  const attemptsInfo = "\n  You have 3 attempts to find it.";

  return welMsg + rangeInfo + attemptsInfo;
}

const number = generateNumber();
console.log(gameInfo());
console.log(initiateGuessTheNumber(maxAttempts, number));
