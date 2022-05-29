// // const person = {
// //   name: "Gedas",
// //   surname: "Sarulis",
// //   age: 30,
// // };

// // console.log(person.name);
// // console.log(person.surname);

// const people = [
//   { id: 1, name: "dedas", surname: "sarulis", age: 16 },
//   { id: 4, name: "somas", surname: "saru", age: 20 },
//   { id: 12, name: "huris", surname: "sar", age: 34 },
//   { id: 13, name: "Bob", surname: "Sarubulis", age: 23 },
//   { id: 15, name: "Jack", surname: "harulis", age: 30 },
// ];

// // console.log(people[0]);
// // const firstItem = people[0];
// // console.log(firstItem.id);
// // const lastItem = people[people.length - 1]; // paskutinis elemetnas iš masyvo
// // console.log(lastItem.id);

// // people.push({ id: 8, name: "Vegitas", surname: "Sajanas", age: 100 }); // ideda i objekta
// // people.shift(); // istrina pirma elementa
// // console.log(people);

// // people.forEach((person) => {
// //   const fullName = `${person.name} ${person.surname}`;
// //   console.log(fullName);
// // });

// const peopleWithFullName = people.map((person) => {
//   const fullName = `${person.name} ${person.surname}`;

//   return {
//     ...person,
//     name: capitalize(person.name),
//     surname: capitalize(person.surname),
//     vardasPavarde: fullName,
//     canDrive: person.age >= 18 ? true : false,
//   };
// });

// function capitalize(value) {
//   return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
// }
// console.log(peopleWithFullName);

const veggies = [
  { name: "Apple", category: "tree", price: 1 },
  { name: "Pear", category: "tree", price: 2 },
  { name: "Blackberries", category: "bush", price: 5 },
  { name: "Blueberries", category: "bush", price: 7 },
  { name: "carrot", category: "dirt", price: 0.25 },
  { name: "Potato", category: "dirt", price: 0.3 },
];

const cheapVeggies = veggies.filter((veggie) => veggie.price <= 1);
const expensiveVeggies = veggies.filter((veggie) => veggie.price >= 6);

const expensiveVeggiesNames = expensiveVeggies.map((veggie) => veggie.name);

// console.log(cheapVeggies);
// console.log(expensiveVeggies);
console.log(expensiveVeggiesNames);
