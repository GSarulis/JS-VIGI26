// // while uzduotis
// // let i = 0;
// // while (i <= 3) {
// //   i++;
// //   console.log("gediminas");
// // }

// // // 2 uzduotis

// // let combo = "";
// // const name = "John";
// // let times = 3;
// // do {
// //   combo += name;
// //   times--;
// // } while (times > 0);
// // console.log(combo);

// // // matematikos
// // Math.cos(0);

// // //

// // Math.floor(Math.random() * 5) + 1;

// // //

// // const randomNumber = Math.floor(Math.random() * 5) + 1;
// // if (randomNumber === 1) {
// //   console.log("You won");
// // } else {
// //   console.log("Try again next time");
// // }

// // Pirma funkciju uzduotis
// function myName() {
//   console.log("Gediminas");
// }

// myName();

// // Antra funkciju uzduotis
// function myRandom(r2) {
//   let isRandom = Math.floor(Math.random() * 5) + 1;
//   console.log(isRandom);
// }
// myRandom(5);
// // Trecia funkciju uzduotis

// function whatNameLength(name1, surname1) {
//   let name = name1.length;
//   let surname = surname1.length;
//   let nameSum = name + surname;
//   console.log(nameSum);
// }

// whatNameLength("AAAAA", "BBBBB");

// // Ketvirta funkciju uzduotis

// function charNumber(x1) {
//   let chars = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];
//   console.log(chars[x1]);
// }
// charNumber(3);

// // Penkta funkciju uzduotis

// function myCalculator(x1, x2, operator) {
//   switch (operator) {
//     case "sum":
//       console.log(x1 + x2);
//       break;
//     case "sub":
//       console.log(x1 - x2);
//       break;
//     case "div":
//       console.log(x1 * x2);
//       break;
//     case "multi":
//       console.log(x1 / x2);
//       break;
//   }
// }
// myCalculator(10, 2, "div");

// // Sprendimas geresnis
// function calculate(n1, n2, operator) {
//   switch (operator) {
//     case "sum":
//       return n1 + n2;
//     case "sub":
//       return n1 - n2;
//     case "div":
//       return n1 / n2;
//     case "multi":
//       return n1 / n2;
//   }
// }
// // Funkcija yra atlikta,  bet ja reikia log'int i konsole, kad pamatyt rezultata.
// console.log(calculate(1, 2, "sum"));

// // Sesta funkciju uzduotis

// function myRandomNumber() {
//   return Math.floor(Math.random() * 10) + 1;
// }
// function timesBytwo(myRandomNumber) {
//   return myRandomNumber * myRandomNumber;
// }
// console.log(timesBytwo(myRandomNumber()));

//

const buttonPop = document.getElementById("buttonHello");
buttonPop.addEventListener("click", myNameAre);

function myNameAre() {
  alert("Gediminas");
}

const textPupUp = document.getElementById("About-us");
textPupUp.addEventListener("click", myP);

function myP() {
  const h1PopUp = document.querySelector("p");
  h1PopUp.textContent = "Kazkoks tekstas";
}

const addNumbers = document.getElementById("addOne");
addNumbers.addEventListener("Click");
