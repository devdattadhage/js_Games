const SPACE = " ";
const DOUBLE_SPACE = "  ";
const WALL = "┃";
const HYPHEN = "━";

function composeLine(start, middle, end) {
  let horizonalLine = HYPHEN;

  for (let index = 1; index <= 39; index++) {
    if (index % 4 === 0) {
      horizonalLine += middle;
    }
    horizonalLine += HYPHEN;
  }

  return start + horizonalLine + end + "\n";
}

function getPosition(position) { // change function name

  if (position === 100) {
    return position;
  }

  return position += position < 10 ? DOUBLE_SPACE : SPACE;
}

function generateBox() {
  let position = 1;
  let box = composeLine("┏", "┳", "┓");

  for (let rows = 1; rows <= 10; rows++) {
    for (let column = 1; column <= 10; column++) {
      box += WALL + SPACE + getPosition(position);
      position++;
    }

    const isFooter = rows === 10;
    box += WALL + "\n";
    box += isFooter ? composeLine("┗", "┻", "┛") : composeLine("┣", "╋", "┫");
  }

  return box;
}

function main() { // change function name
  
  console.log(generateBox());

  // const userInput
}

main();