const rangeStart = 1;
const rangeEnd = 10;
const maxAttempts = 3;

function generateNumber() {
  return Math.floor(Math.random() * 10);
}

function welcomeMessage() {
  const welMsg = "\n  Welcome to Guess the Number! ";
  const rangeInfo = "\n  The secret number is between 0 and 10.";
  const attemptsInfo = "\n  You have 3 attempts to find it.";

  return welMsg + rangeInfo + attemptsInfo;
}

function gameStart(maxAttempts, number) {
  const userInput = +prompt("\n\n  Enter a Number : ");

  if (userInput === number) {
    return "\n Hurray!! You Guessed the Number!";
  }

  const msg = userInput > number ? "  Too High " : "  Too Low ";
  console.log(msg);

  if (maxAttempts < 2) {
    return "\n  Better Luck Next Time!!";
  }
  
  return gameStart(maxAttempts - 1, number);
}

console.log(welcomeMessage());
const number = generateNumber();

console.log(gameStart(maxAttempts, number));
