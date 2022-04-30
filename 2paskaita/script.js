// !!! Patikrinti rašybos klaidas

// 1. Patikrinti ar esu tinkamam folderyje - komanda ls (:C/Users/Rokas/JS-VIGI26/2_paskaita)

// 2. Patikrinti ar išsaugojau failą(-us) - baltas taškas prie failo pavadinimo

// 3. Patikrinti ar įrašiau console.log()

// 4. Patikrinti ar tinkamai paleidau failą "node script.js"

// 5. Patikrinti terminalo išmetamą žinutę

// console.log("Gedas");

// let money = 135.5;
// let price = 185.5;

// if (money > price) {
//   const change = money - price;
//   const curency = "$";
//   console.log("Tu nuspirkai daikta. Tavo graza:" + change + curency); // A
// } else if (money === price) {
//   console.log("Tu nusipirkai daikta. Tau neliko pinigu"); // B
// } else {
//   const missingMoney = price - money;
//   const curency = "$";

//   console.log("Tau neuzteko pinigu. Tau truksta:" + missingMoney + curency); // C
// }

// silver;

// const runner = "Kendyll";

// const position = 2;

// let medal = "pat on the back";

// if (position === 1) {
//   medal = "gold";
// } else if (position === 2) {
//   medal = "silver";
// } else if (position === 3) {
//   medal = "bronze";
// }

// console.log(runner + " received a " + medal + " medal.");

// const number = 12;

// if (number % 2 == 0) {
//   console.log("Skaičius : " + number + "yra lyginis");
// } else {
//   console.log("Skaičius : " + number + "yra ne lyginis");
// }

// const isband = -1;
// let typeOfBand;

// if (isband <= 0) {
//   typeOfBand = "Nėra grupės";
// } else if (isband === 1) {
//   typeOfBand = "Solo";
// } else if (isband === 2) {
//   typeOfBand = "Duetas";
// } else if (isband === 3) {
//   typeOfBand = "Trio";
// } else if (isband === 4) {
//   typeOfBand = "Kvartetas";
// } else {
//   typeOfBand = "Didelė grupė";
// }

// console.log(typeOfBand);

// const myName = "Gediminas";
// console.log(myName.length);

// 1 užduotis

const legalAge = 18;
const clientAge = 10;

if (clientAge < legalAge) {
  console.log("Jūs nepilnametis");
}

//

// 2 užduotis

const myName = "Gediminas";

if (myName.length > 6) {
  console.log("Ilgas vardas");
}
//

// 3 užduotis

const myAge = 12321;

if (myAge > 100) {
  console.log("Invalid age");
} else if (myAge <= 0) {
  console.log("Invalid age");
} else if (myAge < 18) {
  console.log("Child");
} else if (19 < myAge < 99) {
  console.log("Adult");
}

//

// 4 užduotis

const vwGroup = ["VW", "Audi", "Bentley", "Bugatti", "Lamborghini", "Porsch"];
const bmwGroup = ["BMW", "Mini", "Rolls-Royce"];
const whatCar = "audi";

if (whatCar == vwGroup) {
  console.log("Jusu masina" + " " + whatCar + "," + "yra VW koncerno.");
} else if (whatCar == bmwGroup) {
  console.log("Jusu masina" + " " + whatCar + "," + "yra BMW koncerno.");
}
