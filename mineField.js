const safePath1 = [49, 48, 41, 34, 27, 20, 19, 18, 25, 32, 31, 30, 23, 16, 15, 8, 1];
const safePath2 = [49, 42, 41, 40, 33, 26, 25, 24, 31, 30, 29, 22, 15, 16, 9, 2, 1];
const safePath3 = [49, 48, 47, 40, 33, 26, 27, 20, 13, 12, 11, 10, 17, 16, 8, 1];
const safePath4 = [49, 48, 47, 46, 45, 38, 31, 24, 25, 26, 19, 12, 11, 10, 3, 2, 1];
const safePath5 = [49, 48, 41, 40, 39, 38, 31, 24, 25, 26, 27, 20, 13, 12, 5, 4, 3, 10, 9, 8, 1];
const safePath6 = [49, 48, 47, 40, 39, 32, 31, 24, 17, 18, 19, 12, 5, 4, 3, 2, 1];
const boxSize = 7;
const exitPosition = 1;

function getRandomInteger() {
  return Math.ceil(Math.random() * 6);
}

function getRandomSafePath(pathNumber) {
  switch (pathNumber) {
    case 1: return safePath1;
    case 2: return safePath2;
    case 3: return safePath3;
    case 4: return safePath4;
    case 5: return safePath5;
    case 6: return safePath6;
  }
}

function isValuePresent(list, value) {
  for (let index = 0; index < list.length; index++) {
    if (list[index] === value) {
      return true;
    }
  }

  return false;
}

function displayBombMSG() {
  return console.log("\n  You Stepped on Mine 💣 !!! ");
}

function isBombed(path, currentPosition) {
  if (!isValuePresent(path, currentPosition)) {
    return true;
  }

  return false;
}

function createBox(currentPosition) {
  let box = "\n  ";

  for (let index = 1; index <= boxSize * boxSize; index++) {
    box += index === currentPosition ? "🟩" : "⬜";

    if (index % boxSize === 0) {
      box += " \n  ";
    }
  }

  return console.log(box);
}

function displayWarningMsg() {
  return console.log("\n ⚠️  Warning!! Incorrect Direction !!! ");
}

function moveUp(currentPosition) {
  const moveUpPossible = currentPosition > boxSize;

  return moveUpPossible ? currentPosition - boxSize : currentPosition;
}

function moveDown(currentPosition) {
  const moveDownPossible = currentPosition < (boxSize * boxSize) - 6;

  return moveDownPossible ? currentPosition + boxSize : currentPosition;
}

function moveLeft(currentPosition) {
  const moveLeftPossible = currentPosition % boxSize === 1;

  return moveLeftPossible ? currentPosition : currentPosition - 1;
}

function moveRight(currentPosition) {
  const moveRightPossible = currentPosition % boxSize === 0;

  return moveRightPossible ? currentPosition : currentPosition + 1;
}

function controller(userInput, currentPosition) {
  if (userInput === 'W') {
    return moveUp(currentPosition);
  }
  if (userInput === 'S') {
    return moveDown(currentPosition);
  }
  if (userInput === 'A') {
    return moveLeft(currentPosition);
  }
  if (userInput === 'D') {
    return moveRight(currentPosition);
  }

  displayWarningMsg();
  prompt("\n 🙏🏼 Please Enter Valid Instruction ");

  return currentPosition;
}

function getUserInput() {
  return prompt("\n  Enter Direction 🧭 : ");
}

function directionInfo() {
  return "\n  Move ⬆️ : W | Move ⬇️ : S | Move ➡️ : D | Move ⬅️ : A";
}

function attemptInfo(trialsLeft) {
  return "\n\n  Remaining Attempts : " + trialsLeft;
}

function displayInfo(trialsLeft) {
  return console.log(directionInfo() + attemptInfo(trialsLeft));
}

function hasPlayerWon(currentPosition) {
  return currentPosition === exitPosition;
}

function playMineField(path, userName, startPosition, trialsLeft) {
  let currentPosition = startPosition;

  while (trialsLeft > 0) {
    console.clear();
    createBox(currentPosition);
    displayInfo(trialsLeft);

    const userInput = getUserInput();
    currentPosition = controller(userInput, currentPosition);

    if (isBombed(path, currentPosition)) {
      displayBombMSG();
      prompt("\n  press enter to continue!!");
      currentPosition = 49;
      trialsLeft--;
    }

    if (hasPlayerWon(currentPosition)) {
      return "\n 🎉🎉 Congratulations " + userName + " 🤩!! You Won 🎉🎉\n";
    }
  }

  return "\n 💀" + userName + " You're Dead ⚰️ Better Luck In Next Life! ☮️\n";
}

function gameInfo() {
  const game = "\n\n\t\t💣 MINE FIELD 💣 \n";
  const hint = "\n  There is only one Safe Path in the field. ";
  const drawBack = "\n  Else every where is mine 💣 ";
  const goal = "\n  Your goal is to reach the top left corner ↖️ ";
  const rule = "\n  You have to memorize the path. You can't write it anywhere";
  const currPos = "\n  🟩 represents your current Position. ";

  return game + hint + drawBack + goal + rule + currPos;
}

function beginGame() {
  console.log(gameInfo());

  let trialsLeft = 10;
  let startPosition = 49;
  const userName = prompt("\n  🙏🏼 Please Enter Your Name To Continue : ");
  const number = getRandomInteger();
  const path = getRandomSafePath(number);

  console.log(playMineField(path, userName, startPosition, trialsLeft));
}

beginGame();
