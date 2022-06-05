// const asynckas = () => {
//   setTimeout(() => {
//     console.log("Labas krabas");
//   }, 3000);
// };

// asynckas();
// console.log("Gediminas");

// const resolvedPromise = new Promise((resolve, reject) => {
//   resolve("17 celsius, Vilnius");
// });

// resolvedPromise.then((response) => {
//   console.log(`Dabar yra ${response}.`);
// });
// console.log(promise);

const rejectedPromise = new Promise((resolve, reject) => {
  reject("Tinklas yra perkrautas.Bandykite veliau.");
});

rejectedPromise
  .then((response) => {
    console.log(`Dabar yra ${response}.`);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Kreipimasis i oro tarnyba");
  });
