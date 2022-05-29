// // Zinoti primityvius duomenu tipus ir ju naudojimo budus
// // Booolean object
// // String object
// // Number object

// /*
// Primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.
// There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.
// */
// const name = "rokas";
// const age = 7;
// const isHot = true;
// const notFound = undefined;
// const noValue = null;

// const isHotString = Boolean(isHot).toString();
// console.log(isHot);
// console.log(isHotString);

// const numberConstructor = Number(age);
// console.log(age);
// console.log(numberConstructor);

// // integer yra sveikas skaicius
// console.log(Number.isInteger(5));

// //

// // uzapvaliname kiek norim po kablelio
// const salary = 31234.132132312;

// console.log(salary.toFixed(2));

// Suranda stringe ieskomo zodziu ar deriniu. CASE SENSITIVE
const sentence = "My name is Gediminas and I am very happy";
// // Funkcija kuri suranda
// sentence.includes("happy");
// console.log(sentence.includes("happy"));

// Nukerpa simbolius
console.log(sentence.slice(0, 12));

const upperCased = sentence.toUpperCase();
const lowerCased = sentence.toLocaleLowerCase();

console.log(upperCased);
console.log(lowerCased);

function areSameStrings(firstString, SecondString) {
  return firstString.toUpperCase() === SecondString.toUpperCase();
}

console.log(areSameStrings("Gedas", "gedas"));

const resultCOunt = 10;
const dog = "rokis";
const result = dog.repeat(resultCOunt);

console.log(result);
