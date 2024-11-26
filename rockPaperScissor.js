const ROCK = 1;
const PAPER = 2;
const SCISSOR = 3;

function getComputerChoice() {
  const choice = Math.ceil(Math.random() * 3);

  switch (choice) {
    case 1: return ROCK;
    case 2: return PAPER;
    case 3: return SCISSOR;
  }
}

function composeStartMessage() {
  const message = "\n Let's play Rock Paper Scissor!!\n";
  const choiceSegment = "\n 1. Rock ✊🏼\n 2. Paper 👋🏼\n 3. Scissor ✌🏼\n";

  console.log(message, choiceSegment);

  return;
}

function isUserChoiceValid(userChoice) {
  return userChoice === 1 || userChoice === 2 || userChoice === 3;
}

function getUserChoice() {
  const userChoice = +prompt(" Choose Your Weapon :");

  if (!isUserChoiceValid(userChoice)) {
    console.log("\n  Choose Valid Choice !! \n");
    return getUserChoice();
  }

  return userChoice;
}

function exposeWeapon(choice, text) {
  let sign = "✌🏼 ";

  if (choice === 1) {
    sign = "✊🏼 ";
  }
  if (choice === 2) {
    sign = "👋🏼 ";
  }

  return text + sign;
}

function isGameDrawn(userChoice, computerChoice) {
  return userChoice === computerChoice;
}

function rockBeatsScissor(userChoice, computerChoice) {
  return userChoice === 1 && computerChoice === 3;
}

function paperBeatsRock(userChoice, computerChoice) {
  return userChoice === 2 && computerChoice === 1;
}

function scissorBeatsPaper(userChoice, computerChoice) {
  return userChoice === 3 && computerChoice === 2;
}

function hasPlayerWon(userChoice, computerChoice) {
  if (rockBeatsScissor(userChoice, computerChoice)) return true;
  if (paperBeatsRock(userChoice, computerChoice)) return true;
  if (scissorBeatsPaper(userChoice, computerChoice)) return true;

  return false;
}

function gameOutcome(userChoice, computerChoice) {
  if (isGameDrawn(userChoice, computerChoice)) {
    return "\n  TIE!! You Are Better Than I Thought!\n";
  }

  if (hasPlayerWon(userChoice, computerChoice)) {
    return "\n  Won!! You Are Good. Let's Play Again!\n"
  }

  return "\n  Lose!! Better Try Again !!\n"
}

function initiateRockPaperScissor() {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();

  const computerWeapon = exposeWeapon(computerChoice, "Computer : ");
  const userWeapon = exposeWeapon(userChoice, "Player : ");

  console.log("\n", computerWeapon, userWeapon);

  return gameOutcome(userChoice, computerChoice);
}

function playGame() {
  const isReady = confirm("\n Are You Ready To Play Rock Paper Scissor!!");
  if (!isReady) {
    console.log("\n  🙏🏼 Thanks. Come Again!!\n");
    return;
  }

  composeStartMessage();
  console.log(initiateRockPaperScissor());

  return playGame();
}

playGame();
