// console.log("6 paskaita, masyvai, funkcijos ir event'ai");

// console.log("");

// const myName = "Gediminas";
// const nameLength = myName.length;
// const firstChar = myName[0];
// const lastChar = myName[nameLength - 1];
// const midleChar = myName[Math.floor(myName.length / 2)];
// console.log(myName.length);
// // Paima mano pirma vardo raide, [cia nurodai kuria raide nori , tiksliau vieta]
// console.log(myName[0]);
// console.log(firstChar);
// console.log(lastChar);
// console.log(midleChar);
// console.log("");
// for (let i = 0; i < myName.length; i++) {
//   const char = myName[i];
//   console.log(`${i + 1}. ${char}`);
// }

// const firstChars = myName.charAt(0);
// const lastChars = myName.charAt(myName.length - 1);

// console.log(firstChars);
// console.log(lastChars);
// console.log("");

// // const raides = ["G", "E", "D", "A", "S"];
// const fruits = ["Apple", "Strawberry", "Blueberry"];
// console.log(fruits.length);
// console.log(fruits[1]);

// for (let i = 0; i < fruits.length; i++) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }
// console.log("");

// const students = ["Edvinas", "Liudmila", "Julija", "Rokas", "Asta"];
// for (let i = 0; i < students.length; i++) {
//   const student = students[i];
//   if (student.length > 5) {
//     console.log(`Vardas ${student} turi daugiau nei penkias raides`);
//   } else if (student.length < 5) {
//     console.log(`Vardas ${student} turi maziau nei penkias raides`);
//   } else {
//     console.log(`Vardas ${student} turi lygiai penkias raides`);
//   }
//   console.log();
// }

// console.log("");

// const basket = [7, 10, 0.5, 23, 41];
// let total = 0;

// for (let i = 0; i < basket.length; i++) {
//   const number = basket[i];
//   total += number;
//   console.log(number);
// }
// console.log("");
// console.log(`Viso suma: ${total}`);
// console.log("");

// Funkcijos
// 1. VOID funkcija
// 2. RETURN funkcija
function square(number) {
  return number * number;
}
// FUNKCIJOS ISKVIETIMAS
const squareNumber = square(10);
console.log(squareNumber);

function logger(value) {
  console.log(value);
}

const loggedValue = logger("Testing..");
console.log(loggedValue);

function printAllArrayItems(array) {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    console.log(item);
  }
}

const students = ["Edvinas", "Liudmila", "Julija", "Rokas", "Asta"];

printAllArrayItems(students);

// Funkcijos kurios priims argumentus du
//       pavadinimas   argumentai
function repeatString(string, count) {
  let finalString = "";
  for (let i = 0; i < count; i++) {
    finalString += string;
  }
  return finalString;
}
// Funkcijos issaukimas            reiksme1  reiksme2
const repeatedString = repeatString("Gediminas", 2);
console.log(repeatedString);

function addition(a, b) {
  return a + b;
}
console.log(addition(12, 32));

function atimtis(a, b) {
  return a - b;
}
console.log(atimtis(122, 322));
