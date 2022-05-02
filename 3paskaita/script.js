console.log("Trecia paskaita switch, ternary, for ciklas");

const number = 4;

if (number === 1) {
  console.log("Pirmadienis");
} else if (number === 2) {
  console.log("Antadienis");
} else if (number === 3) {
  console.log("Treciadienis");
} else if (number === 4) {
  console.log("Ketvirtadienis");
} else if (number === 5) {
  console.log("Penktadienis");
} else if (number === 6 || number === 7) {
  console.log("Savaitgalis");
} else {
  console.log("Blogai irasyta savaites diena");
}

switch (number) {
  case 1:
    console.log("Pirmadienis");
    break;
  case 2:
    console.log("Antradienis");
    break;
  case 3:
    console.log("Treciadienis");
    break;
  case 4:
    console.log("Ketvirtadienis");
    break;
  case 5:
    console.log("Penktadienis");
    break;
  case 6:
  // console.log("Savaitgalis");
  // break;
  case 7:
    console.log("Savaitgalis");
    break;

  default:
    console.log("Blogai irasyta savaites diema");
}

// Ternary simboliai yra : ? arba :
// ? reiskia IF , o : else

const age = 20;
const legalAge = 18;
const drinkingAge = 20;
const celciusDegrees = 10;
let result = "pilnametis";
if (age < legalAge) {
  result = "Nepilnametis";
}

const isLegal = age < legalAge;
//                   if salyga,        patenkina,        else
const resultTernary = age < legalAge ? "Nepilnametis" : "Pilnametis";
const drink = age >= drinkingAge ? "Beer" : "Milk";
const weather = celciusDegrees <= 0 ? "Cold" : "Warm";

// console.log(result);
// console.log(drink);
// console.log(resultTernary);
// console.log(weather);

// Naudoti tik tada template string tik tada, kai dedame kintamuosiuos i vidu.

const myNameIs = "Gediminas";
const mySurnameIs = "Sarulis";

console.log(myNameIs + " " + mySurnameIs);
console.log(`${myNameIs} ${mySurnameIs}`); // Pradedame naudoti VIEN TIK sita selectoriu!
