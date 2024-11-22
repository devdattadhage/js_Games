const ROCK = '1';
const PAPER = '2';
const SCISSOR = '3';

function createComputerChoice() {
  const random = Math.random();

  if (random < 0.35) {
    return ROCK;
  }
  if (random < 0.75) {
    return PAPER;
  }

  return SCISSOR;
}

function createStartMessage() {
  const message = "\n Let's play Rock Paper Scissor!!\n";
  const choiceSegment = "\n 1. Rock ✊🏼\n 2. Paper 👋🏼\n 3. Scissor ✌🏼\n";

  return message + choiceSegment;
}

function gameInfo() {
  console.log(createStartMessage());

  return prompt(" Choose Your Weapon :");;
}

function showWeapon(choice, text) {
  let sign = "✌🏼 ";

  if (choice === '1') {
    sign = "✊🏼 ";
  }
  if (choice === '2') {
    sign = "👋🏼 ";
  }

  return text + sign;
}

function winOrLose(choicePair) {
  if (choicePair === '13' || choicePair === '21' || choicePair === '32') {
    return "\n  Won!! You Are Good. Let's Play Again!\n"
  }
  return "\n  Lose!! Better Try Again !!\n"
}

function isUserChoiceValid(userChoice) {
  return userChoice === '1' || userChoice === '2' || userChoice === '3';
}

function rockPaperScissor() {
  const userChoice = gameInfo();
  if (!isUserChoiceValid(userChoice)) {
    return "\n  Choose Valid Choice !! \n"
  }

  const computerChoice = createComputerChoice();
  const choicePair = userChoice + computerChoice;
  const computerWeapon = showWeapon(computerChoice, "Computer : ");
  const userWeapon = showWeapon(userChoice, "Player : ");

  console.log("\n", computerWeapon, userWeapon);

  if (userChoice === computerChoice) {
    return "\n  TIE!! You Are Better Than I Thought!\n";
  }

  return winOrLose(choicePair);
}

function continueGame() {
  const isReady = confirm("\n Are You Ready To Play Rock Paper Scissor!!");

  if (!isReady) {
    return "\n  🙏🏼 Thanks. Come Again!!\n"
  }

  console.log(rockPaperScissor());

  return continueGame();
}

console.log(continueGame());
