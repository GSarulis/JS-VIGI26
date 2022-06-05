class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  isFat() {
    if (this.weight >= 5) {
      return `${this.name} yra storas`;
    } else {
      return `${this.name} yra plonas`;
    }
  }
}

const cat = new Animal("Kleopetras", 7);
console.log(cat.isFat());
const randomArray = [1, 2, 3, 4, 56, , "a", "g"];
const removeNumbersFromArray = (array) => array.filter((x) => isNaN(x));
const removeLettersFromArray = (array) => array.filter((x) => !isNaN(x));
const removedNumbers = removeNumbersFromArray(randomArray);
const removedLetters = removeLettersFromArray(randomArray);
console.log(removedNumbers);
console.log(removedLetters);

const test = "Rokas !@#$%^ Tomas 123";
ats: "Rokas !!@@##$$%%^^ Tomas 112233";
const newTest = test
  .split("")
  .map((char) => (!isNaN(char) ? char + char : char))
  .map((char) => (isNaN(char) ? char + char : char))
  .join("")
  .toString()
  .replace("RRookkaass", "Rokas")
  .replace("TToommaass", "Tomas");

console.log(newTest);

// Sukurkite funkciją, kuri priims array ir prie kiekvieno array elemento pridės "7", nebent elementas baigsis "7".

const array = [1, 2, 3, 4, ",g", "f", 7, 123, 43, 123, 7, 7, "g7"];

// array.forEach((x) => {
//   if (x === 7) {
//     return consle.log(x);
//   } else {
//     return console.log(x + "7");
//   }
// });

function addSeven(x) {
  for (let index = 0; index <= x.length; index++) {
    const element = x[index];
    if (element === 7) {
      console.log(element);
    } else {
      console.log(element + "7");
    }
  }
}

console.log(addSeven(array));
