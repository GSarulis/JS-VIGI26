// Pirma užduotis, SWITCH

const masina = "Audi";

switch (masina) {
  case "VW":
    console.log("VW group");
    break;
  case "Audi":
    console.log("VW group");
    break;
  case "Bentley":
    console.log("VW group");
    break;
  case "Bugatti":
    console.log("VW group");
    break;
  case "Lamborghini":
    console.log("VW group");
    break;
  case "Porshe":
    console.log("VW group");
    break;
  case "BMW":
    console.log("BMW group");
    break;
  case "Mini":
    console.log("BMW group");
    break;
  case "Rolls-Royce":
    console.log("BMW group");
    break;

  default:
    console.log("Blogas pavadinimas");
}

// Antra užduotis

const userInput = "Ridikas";
switch (userInput) {
  case "Obuolys":
    console.log("Vaisius");
    break;
  case "Braškė":
    console.log("Vaisius");
    break;
  case "Bruknė":
    console.log("Vaisius");
    break;
  case "Ieva":
    console.log("Vaisius");
    break;
  case "Ropė":
    console.log("Daržovė");
    break;
  case "Ridikas":
    console.log("Daržovė");
    break;
  case "Morka":
    console.log("Daržovė");
    break;
  case "Svogūnas":
    console.log("Daržovė");
    break;
  case "Brokolis":
    console.log("Daržovė");
    break;
  case "Artišokas":
    console.log("Daržovė");
    break;

  default:
    console.log("Blogas pavadinimas");
}

// Trečia užduotis                  new Date().getDay()

let weekDay = 1;
switch (weekDay) {
  case 0:
    weekDay = "Sekmadienis";
    break;
  case 1:
    weekDay = "Pirmadienis";
    break;
  case 2:
    weekDay = "Antradienis";
    break;
  case 3:
    weekDay = "Trečiadienis";
    break;
  case 4:
    weekDay = "Ketvirtadienis";
    break;
  case 5:
    weekDay = "Penktadienis";
    break;
  case 6:
    weekDay = "Šeštadienis";
    break;
}
console.log(weekDay);

// 4 užduotis TERNARY
const myName = "Gediminas";

const nameLength = myName.length <= 5 ? "Short name" : "Long name";

console.log(nameLength);

// 5 užduotis

const clientAge = 18;
const legalDrivingAge = 21;

const canItDrive = clientAge >= legalDrivingAge ? "Can drive" : "Can't dirve";

console.log(canItDrive);

// 6 užduotis

// 7 užduotis

const phone = "iPhone";

const isIphoneUser = phone === "iPhone";

// 8 pratimas

const howMany = 11;
const loopName = "Gediminas";

for (let i = 1; i < howMany; i++) {
  console.log(`${i}. ${loopName}`);
}

// 9 pratimas

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
