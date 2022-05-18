// Pasikartoti masyvo struktūra
// išmokti sukurti elemtą JavaSciprt faile
// Susipažinti su append/prepend metodais ir juos panaudotio

const array = ["Gedas", "Rokas", "Tomas"];
const numbers = [1, 2, 3, 4, 5];
const users = [
  { name: "Gedas", age: 30 },
  { name: "Rokas", age: 21 },
];

const fruits = document.getElementsByTagName("li");
// const fruits2 = document.querySelectorAll("li");
const fruits2 = document.querySelectorAll("#fruit");
console.log(fruits);
console.log(fruits2);

// apend
const newFruit = document.createElement("li");
newFruit.textContent = "Pineapple";
const fruitsList = document.getElementById("fruits");
// fruitsList.append(newFruit);

// prepend

const pear = document.createElement("li");
pear.textContent = "Pear";
pear.style.color = "green";
// fruitsList.prepend(pear);

//

const extraList = document.createElement("ol");

extraList.append(newFruit);
extraList.append(pear);

document.body.append(extraList);
