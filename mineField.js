const boxRxC = 7;
const exit = 1;
const safePath1 = "49 48 41 34 27 20 19 18 25 32 31 30 23 16 15 8 1";
const safePath2 = "49 42 41 40 33 26 25 24 31 30 29 22 15 16 9 2 1";
const safePath3 = "49 48 47 40 33 26 27 20 13 12 11 10 17 16 15 8 1";
const safePath4 = "49 48 47 46 45 38 31 24 25 26 19 12 11 10 3 2 1";
const safePath5 = "49 48 41 40 39 38 31 24 25 26 27 20 13 12 5 4 3 10 9 8 1";
const safePath6 = "49 48 47 40 39 32 31 24 17 18 19 12 5 4 3 2 1";

let attemptsRemaining = 10;
let currentPosition = 49;

function getRandomSafePath() {
  const pathNumber = Math.ceil(Math.random() * 6);

  switch (pathNumber) {
    case 1: return safePath1;
    case 2: return safePath2;
    case 3: return safePath3;
    case 4: return safePath4;
    case 5: return safePath5;
  }

  return safePath6;
}

function matchAtPosition(string, subString, stringIndex) {
  for (let substrIndex = 0; substrIndex < subString.length; substrIndex++) {
    if (string[stringIndex + substrIndex] !== subString[substrIndex]) {
      return false;
    }
  }

  return true;
}

function isSubstring(string, subString) {
  subString += "";

  if (subString === "") {
    return false;
  }

  for (let index = 0; index <= string.length - subString.length; index++) {
    if (matchAtPosition(string, subString, index)) {
      return true;
    }
  }

  return false;
}

function attemptInfo() {
  return "\n\n  Remaining Attempts : " + attemptsRemaining;
}

function getBombMSG() {
  return "\n  You Stepped on Mine 💣 !!! ";
}

function createBox(path) {
  let box = "\n  ";

  for (let index = 1; index <= boxRxC * boxRxC; index++) {
    box += index === currentPosition ? "🟩" : "⬜";

    if (index % boxRxC === 0) {
      box += " \n  ";

    }
    if (!isSubstring(path, currentPosition)) {
      currentPosition = 49;
      attemptsRemaining--;

      console.log(getBombMSG());
    }
  }

  return console.log(box);
}

function warningMsg() {
  return "\n ⚠️  Warning!! Incorrect Direction !!! ";
}

function moveUp(currentPosition) {
  const moveUpPossible = currentPosition > boxRxC;

  return moveUpPossible ? currentPosition - boxRxC : currentPosition;
}

function moveDown(currentPosition) {
  const moveDownPossible = currentPosition < (boxRxC * boxRxC) - 6;

  return moveDownPossible ? currentPosition + boxRxC : currentPosition;
}

function moveLeft(currentPosition) {
  const moveLeftPossible = currentPosition % boxRxC === 1;

  return moveLeftPossible ? currentPosition : currentPosition - 1;
}

function moveRight(currentPosition) {
  const moveRightPossible = currentPosition % boxRxC === 0;

  return moveRightPossible ? currentPosition : currentPosition + 1;
}

function controller(userInput) {
  if (userInput === 'w' || userInput === 'W') {
    return moveUp(currentPosition);
  }
  if (userInput === 's' || userInput === 'S') {
    return moveDown(currentPosition);
  }
  if (userInput === 'a' || userInput === 'A') {
    return moveLeft(currentPosition);
  }
  if (userInput === 'd' || userInput === 'D') {
    return moveRight(currentPosition);
  }

  console.log(warningMsg());
  prompt("\n 🙏🏼 Please Enter Valid Instruction ");

  return currentPosition;
}

function getUserInput() {
  return prompt("\n  Enter Direction 🧭 : ");
}

function directionInfo() {
  return "\n  Move ⬆️ : W | Move ⬇️ : S | Move ➡️ : D | Move ⬅️ : A";
}

function displayInfo() {
  return directionInfo() + attemptInfo();
}

function initiateMineField(path, userName) {
  console.clear();
  createBox(path);

  if (attemptsRemaining < 2) {
    return `\n  💀 ${userName} you are Dead ⚰️ !! Better Luck In Next Life! ☮️\n`;
  }
  if (currentPosition === exit) {
    return `\n  🎉🎉 Congratulations ${userName} 🤩!! You Won 🎉🎉\n`;
  }

  console.log(displayInfo());
  const userInput = getUserInput();
  currentPosition = controller(userInput);

  return initiateMineField(path, userName);
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

console.log(gameInfo());

const userName = prompt("\n  🙏🏼 Please Enter Your Name To Continue : ");
const path = getRandomSafePath();
console.log(initiateMineField(path, userName));
