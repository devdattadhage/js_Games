const boxSize = 7;
const exit = 1;

function getRandomSafePath() {
  const safePath1 = "49 48 41 34 27 20 19 18 25 32 31 30 23 16 15 8 1";
  const safePath2 = "49 42 41 40 33 26 25 24 31 30 29 22 15 16 9 2 1";
  const safePath3 = "49 48 47 40 33 26 27 20 13 12 11 10 17 16 15 8 1";
  const safePath4 = "49 48 47 46 45 38 31 24 25 26 19 12 11 10 3 2 1";
  const safePath5 = "49 48 41 40 39 38 31 24 25 26 27 20 13 12 5 4 3 10 9 8 1";
  const safePath6 = "49 48 47 40 39 32 31 24 17 18 19 12 5 4 3 2 1";
  const pathNumber = Math.ceil(Math.random() * 6);

  switch (pathNumber) {
    case 1: return safePath1;
    case 2: return safePath2;
    case 3: return safePath3;
    case 4: return safePath4;
    case 5: return safePath5;
    case 6: return safePath6;
  }
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

function getBombMSG() {
  return "\n  You Stepped on Mine 💣 !!! ";
}

function createBox(path, currentPosition) {
  let box = "\n  ";

  for (let index = 1; index <= boxSize * boxSize; index++) {
    box += index === currentPosition ? "🟩" : "⬜";

    if (index % boxSize === 0) {
      box += " \n  ";
    }
    if (!isSubstring(path, currentPosition)) {
      currentPosition = 49;
      console.log(getBombMSG());
    }
  }
  console.log(box);

  return currentPosition;
}

function warningMsg() {
  return "\n ⚠️  Warning!! Incorrect Direction !!! ";
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

function attemptInfo(trialsLeft) {
  return "\n\n  Remaining Attempts : " + trialsLeft;
}

function displayInfo(trialsLeft) {
  return directionInfo() + attemptInfo(trialsLeft);
}

function initiateMineField(path, userName, currentPosition, trialsLeft) {
  console.clear();
  currentPosition = createBox(path, currentPosition);

  if (trialsLeft < 1) {
    return "\n 💀" + userName + " You're Dead ⚰️ Better Luck In Next Life! ☮️\n";
  }
  if (currentPosition === exit) {
    return "\n 🎉🎉 Congratulations " + userName + " 🤩!! You Won 🎉🎉\n";
  }

  console.log(displayInfo(trialsLeft));
  const userInput = getUserInput();
  currentPosition = controller(userInput, currentPosition);
  trialsLeft -= isSubstring(path, currentPosition) ? 0 : 1;

  return initiateMineField(path, userName, currentPosition, trialsLeft);
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
  let currentPosition = 49;
  const userName = prompt("\n  🙏🏼 Please Enter Your Name To Continue : ");
  const path = getRandomSafePath();

  console.log(initiateMineField(path, userName, currentPosition, trialsLeft));
}

beginGame();
