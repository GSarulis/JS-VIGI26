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

// const rejectedPromise = new Promise((resolve, reject) => {
//   reject("Tinklas yra perkrautas.Bandykite veliau.");
// });

// rejectedPromise
//   .then((response) => {
//     console.log(`Dabar yra ${response}.`);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Kreipimasis i oro tarnyba");
//   });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("17 celsius, Vilnius");
//     reject("Tinklas yra perkrautas.Bandykite veliau.");
//   }, 4000);
// });

// const renderWeather = (response) => {
//   const weather = document.getElementById("weather");
//   weather.textContent = `Dabar yra ${response}.`;
// };
// const showErorr = (err) => {
//   const error = document.getElementById("errors");
//   error.textContent = err;
//   error.style.color = "red";
// };

// const showPriceMassage = () => {
//   const massage = document.getElementById("header");
//   header.textContent = "Jus pasinaudojote oro paslauga. Jums tai kainavo 5ct";
// };

// const getWeather = async () => {
//   try {
//     const response = await promise;
//     renderWeather(response);
//   } catch (error) {
//     showErorr(error);
//   } finally {
//     showPriceMassage();
//   }
// };

// getWeather();

// async function getWeatherFunc() {}

// promise
//   .then((response) => {
//     // apsirasyti atvaizdavima
//     renderWeather(response);
//   })
//   .catch((error) => {
//     showErorr(error);
//   })
//   .finally(() => {
//     showPriceMassage();
//   });

// namu darbai

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 1000);
// });

// promise.then(() => {
//   console.log("Veikia");
// });

//
// const promise2 = new Promise((resolve, reject) => {
//   const random = Math.floor(Math.random() * 5) + 1;
//   if (1 === random) {
//     setTimeout(() => {
//       reject();
//     }, 1000);
//   } else
//     setTimeout(() => {
//       resolve();
//     }, 1000);
// });

// promise2.then(() => {
//   console.log("Veikia");
// });
// promise2.catch(() => {
//   console.log("Neveikia");
// });

//

const bandymas = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 5) + 1;
  if (1 === random) {
    setTimeout(() => {
      reject();
    }, 1000);
  } else {
    setTimeout(() => {
      resolve();
    }, 1000);
  }
});

bandymas
  .then(() => "This is message")
  .then((message) => console.log(message))
  .catch(() => console.log("Oops, pažadas buvo atmestas"));
