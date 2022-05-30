// // // function Book(name, author, year) {
// // //   this.name = name;
// // //   this.author = author;
// // //   this.year = year;
// // //   this.getInfo = () => {
// // //     return `${this.name} parašė ${this.author} knygą.`;
// // //   };
// // //   this.getYears = () => {
// // //     const today = new Date();
// // //     return today.getFullYear() - this.year;
// // //   };
// // // }

// // // const harryPotterBook = new Book("Harry Potter", "J.K.Rowling", 2000);
// // // console.log(harryPotterBook.getInfo());
// // // console.log(harryPotterBook.getYears());

// // // class Book {
// // //   constructor(name, author, year) {
// // //     this.name = name;
// // //     this.author = author;
// // //     this.year = year;
// // //   }
// // //   getInfo = () => {
// // //     return `${this.name} parašė ${this.author} knygą.`;
// // //   };

// // //   getYears = () => {
// // //     const today = new Date();
// // //     return today.getFullYear() - this.year;
// // //   };
// // // }

// class Employee {
//   constructor(position, wage, experienve) {
//     this.position = position;
//     this.wage = wage;
//     this.experienve = experienve;
//   }
//   getBonus = () => {
//     if (this.experienve < 5) {
//       return this.wage;
//     } else if (this.experienve < 10) {
//       return this.wage * 2;
//     } else {
//       return this.wage * 3;
//     }
//   };
// }

// // const softwareDeveloper = new Employee("Front-end engineer", 4000, 2);
// // const salesManager = new Employee("Sales manager", 6000, 3);
// // console.log(salesManager.getBonus());
// // console.log(softwareDeveloper.getBonus());

// HOME WORKS
// Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir patikrinkite ar veikia.

function Car(brand, model, engine) {
  this.brand = brand;
  this.model = model;
  this.engine = engine;
  this.turnOn = () => {
    return `Vrooom`;
  };
}

const Audi = new Car("a6", "Sedanas", "Diesel");
const BMW = new Car("BMW", 530, "Petrol");

console.log(Audi.turnOn());
console.log(BMW.turnOn());

// Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą, tačiau getPric priklausimai nuo variklio išmes kokia yra galutinė kaina.
//  Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.

class Cars {
  constructor(brand, model, engine, basePrice) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.basePrice = basePrice;
  }
  getPrice = () => {
    if (this.engine === "electric") {
      return this.basePrice + 10000;
    } else if (this.engine === "diesel") {
      return this.basePrice + 5000;
    } else if (this.basePrice === "petrol") {
      return this.basePrice;
    } else {
      return `${this.engine} tokio variklio nėra. :)`;
    }
  };
}

const lexus = new Cars("LS", "sedanas", "diesel", 1000);
const suzuki = new Cars("aha", "sedanas", "electric", 2);
const maz = new Cars("nieko gero", "vežimas", "žibalas", 0);
console.log(lexus.getPrice());
console.log(suzuki.getPrice());
console.log(maz.getPrice());
