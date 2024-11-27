let fwd1 = "_________________________________________________.-'--`-._ ______________________________\\________________________________________________________";
let fwd2 = " __                                              '-O---O--'                      .-`''''''`-.                                        __o          ";
let fwd3 = ".-'--`-._                                                                        '=()===()=-'                                      _ \\<_          ";
let fwd4 = "'-O---O--'________________________________________________________________________________________________________________________(_)/(_)_________";

let bwd1 = "__________________________________________________________________________________________________________________________________________________";
let bwd2 = "         __                                          ____//_]|________                                ____//__][__][___|                          ";
let bwd3 = "   _.-'--`-.                                        (o _ |  -|   _  o|                               (o  _|  -|     _ o|                          ";
let bwd4 = "__`--O---O-`________________________________________`(_)-------(_)--'________________________________ `-(_)--------(_)-'__________________________";

let segment1 = "    ┏━━━━━┓    ✦       ✦           ✦ ┏━━━━━━┓ ✦        ✦        ┏━━━━━━┓      #   ┏━━━━━┓   ┏━━━┓     ✦    ✦    ✦             ✦            ✦    ✦";
let segment2 = "    ┃ ▇ ▇ ┃   ✦             #        ┃ ▇  ▇ ┃╲      ┏━━━┓      ╱┃ ▇  ▇ ┃     ###  ┃  ▇  ┃   ┃ ▇ ┃┏━━━━━┓    ✦  ┏━━━━━━━━━━━━━━━┓        #    ✦   ";
let segment3 = "    ┃ ▇ ▇ ┃━━━━━┓    ✦     ###       ┃ ▇  ▇ ┃ ┏━━━━━┛ + ┗━━━━━┓ ┃ ▇  ▇ ┃━━━━#####━┛  ▇  ┗━━━┃ ▇ ┃┃ ▇ ▇ ┃━━━━━━━┃ ▇ ▇  ▇ ▇  ▇ ▇ ┃    ✦  ###       ";
let segment4 = "    ┃ ▇ ▇ ┃ ▇ ▇ ┃        ######      ┃ ▇  ▇ ┃ ┃ ▇ ▇  ▇ ▇  ▇ ▇ ┃ ┃ ▇  ▇ ┃ ▇ #######  ▇  ▇  ▇ ┃ ▇ ┃┃ ▇ ▇ ┃ ▇   ▇ ┃ ▇ ▇  ▇ ▇  ▇ ▇ ┃     #######     ";
let segment5 = "    ┃ ▇ ▇ ┃ ▇ ▇ ┃      ###╲|╱###     ┃ ▇  ▇ ┃ ┃ ▇ ▇  ▇ ▇  ▇ ▇ ┃ ┃ ▇  ▇ ┃ ▇###╲|╱####▇  ▇  ▇ ┃ ▇ ┃┃ ▇ ▇ ┃ ▇   ▇ ┃ ▇ ▇  ▇ ▇  ▇ ▇ ┃    ###╲|╱####   ";
let segment6 = "    ┃ ▇ ▇ ┃ ▇ ▇ ┃         }|{        ┃ ▇  ▇ ┃ ┗━━━━━━━━━━━━━━━┛ ┃ ▇  ▇ ┃ ▇  ▇}|{ ▇  ▇  ▇  ▇ ┃ ▇ ┃┃ ▇ ▇ ┃ ▇   ▇ ┃ ▇ ▇  ▇ ▇  ▇ ▇ ┃       }|{       ";
let segment7 = "    ┗━━━━━┛━━━━━┛        _)|(_       ┃______┃╱                 ╲┃______┃━━━ _)|(_━━━━━━━━━━━┗━━━┛┗━━━━━┛━━━━━━━┗━━━━━━━━━━━━━━━┛      _)|(_      ";

function delay() {
  for (let index = 0; index < 45000000; index++) { }
}

function background() {
  const backround = "\n\n" + segment1 + "\n" + segment2 + "\n" + segment3 + "\n" + segment4 + "\n" + segment5 + "\n" + segment6 + "\n" + segment7 + "\n";
  
  return backround;
}

function getNewFrame(frame, index, upto, charToAddIndex) {
  let newFrame = "";

  for (index; index < upto; index++) {
    newFrame = newFrame + frame[index];
  }
  if (charToAddIndex === 0) {
    return newFrame + frame[0];
  }

  return frame[charToAddIndex] + newFrame;
}

function forwardMovingCars() {
  const car = fwd1 + "\n" + fwd2 + "\n" + fwd3 + "\n" + fwd4;
  const lastIndex = fwd1.length - 1;

  fwd1 = getNewFrame(fwd1, 0, lastIndex, lastIndex);
  fwd2 = getNewFrame(fwd2, 0, lastIndex, lastIndex);
  fwd3 = getNewFrame(fwd3, 0, lastIndex, lastIndex);
  fwd4 = getNewFrame(fwd4, 0, lastIndex, lastIndex);

  return car;
}

function backwardMovingCars() {
  const car = bwd1 + "\n" + bwd2 + "\n" + bwd3 + "\n" + bwd4;

  bwd1 = getNewFrame(bwd1, 1, bwd1.length, 0);
  bwd2 = getNewFrame(bwd2, 1, bwd2.length, 0);
  bwd3 = getNewFrame(bwd3, 1, bwd3.length, 0);
  bwd4 = getNewFrame(bwd4, 1, bwd4.length, 0);

  return car;
}

function playAnimation() {
  for (let index = 0; index < 300; index++) {
    console.clear();

    console.log(background());
    console.log(forwardMovingCars());
    console.log(backwardMovingCars());

    delay();
    delay();
  }
}

playAnimation();
