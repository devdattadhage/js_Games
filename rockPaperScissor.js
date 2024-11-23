const ROCK = '1';
const PAPER = '2';
const SCISSOR = '3';

function getComputerChoice() {
  const choice = Math.ceil(Math.random() * 3);

  switch (choice) {
    case 1: return ROCK;
    case 2: return PAPER;
  }

  return SCISSOR;
}

function composeStartMessage() {
  const message = "\n Let's play Rock Paper Scissor!!\n";
  const choiceSegment = "\n 1. Rock ✊🏼\n 2. Paper 👋🏼\n 3. Scissor ✌🏼\n";

  return message + choiceSegment;
}

function gameInfo() {
  console.log(composeStartMessage());

  return prompt(" Choose Your Weapon :");
}

function exposeWeapon(choice, text) {
  let sign = "✌🏼 ";

  if (choice === '1') {
    sign = "✊🏼 ";
  }
  if (choice === '2') {
    sign = "👋🏼 ";
  }

  return text + sign;
}

function gameOutcome(choicePair, userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "\n  TIE!! You Are Better Than I Thought!\n";
  }
  if (choicePair === '13' || choicePair === '21' || choicePair === '32') {
    return "\n  Won!! You Are Good. Let's Play Again!\n"
  }

  return "\n  Lose!! Better Try Again !!\n"
}

function isUserChoiceValid(userChoice) {
  return userChoice === '1' || userChoice === '2' || userChoice === '3';
}

function initiateRockPaperScissor() {
  const userChoice = gameInfo();
  if (!isUserChoiceValid(userChoice)) {
    return "\n  Choose Valid Choice !! \n";
  }

  const computerChoice = getComputerChoice();
  const choicePair = userChoice + computerChoice;
  const computerWeapon = exposeWeapon(computerChoice, "Computer : ");
  const userWeapon = exposeWeapon(userChoice, "Player : ");

  console.log("\n", computerWeapon, userWeapon);


  return gameOutcome(choicePair, userChoice, computerChoice);
}

function continueGame() {
  const isReady = confirm("\n Are You Ready To Play Rock Paper Scissor!!");
  if (!isReady) {
    return "\n  🙏🏼 Thanks. Come Again!!\n";
  }

  console.log(initiateRockPaperScissor());

  return continueGame();
}

console.log(continueGame());
