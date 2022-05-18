// objekto savybe (property) yra reiksmes ( string, array, object it t.t) melyna spalva
// objekto metodai (method) yra funkcijos atitikmuo. reikia iskviesti ir paduodi parametrus

const nameInput = document.getElementById("name");
// console.log(nameInput.textContent);
// console.log(nameInput.innerText);
// console.log(nameInput.innerHTML);

// nameInput.addEventListener("click", nameClick);

// function nameClick() {
//   nameInput.style.backgroundColor = "red";
//   nameInput.style.color = "#e3e3e3";
//   nameInput.style.textAlign = "right";
//   nameInput.style.fontSize = "72px";
// }

const jumpBottom = document.getElementById("jump");

jumpBottom.addEventListener("click", handleJump);

jumpBottom.style.cssText = "position: absolute; top: 30px; right: 30px;";

let inTop = true;

function handleJump() {
  if (inTop) {
    jumpBottom.style.cssText = "position: absolute; bottom: 30px; left: 30px;";
    jumpBottom.textContent = "Jump to top";
    nameInput.textContent = "Gediminas Sarulis";
    inTop = false;
  } else {
    jumpBottom.style.cssText = "position: absolute; top: 30px; right: 30px;";
    jumpBottom.textContent = "Jump to bottom";
    nameInput.textContent = "Sarulis Gediminas";

    inTop = true;
  }

  //   inTop = !inTop;
}

const backwardsButton = document.getElementById("backwards");
backwardsButton.addEventListener("click", handleGoBackwards);

let position = 0;
const topLeft = "position : absolute ; top : 10px ; left : 10px;";
const topRight = "position:absolute; top:10px;right:10px;";
const bottomRight = "position:absolute; botton:10px;right:10px;";
const bottomLeft = "position:absolute; bottom:10px;left:10px;";

backwardsButton.style.cssText = topLeft;

function handleGoBackwards() {
  if (position === 0) {
    backwardsButton.style.cssText = bottomLeft;
  } else if (position === 1) {
    backwardsButton.style.cssText = bottomRight;
  } else if (position === 2) {
    backwardsButton.style.cssText = topRight;
  } else {
    backwardsButton.style.cssText = topLeft;
    position = -1;
  }

  position++;
}
