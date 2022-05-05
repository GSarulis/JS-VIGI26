console.log("4 paskaita, for ciklai");
// // kintamieji turi buti i j k
// // [inicializavimas];[salyga];[israiska]
// for (let i = 0; i < 10; i++) {
//   console.log("John");
// }

// // // += x += y x= x+y
// // // -= x -= y x= x-y

// // for (let i = 0; i < 10; i += 0.7) {
// //   console.log(i);
// // }

// console.log("   ");

// const dogNamde = "Grikis";
// const repeat = 3;
// let result = "";
// for (let i = 0; i < repeat; i++) {
//   result += `${dogNamde},`;
// }

// console.log(result);

// const start = 1;
// const count = 9;
// let result = 0;

// for (let i = start; i < count + 1; i++) {
//   result += i;
// }
// console.log(result);

// while ispradziu
// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i += 2;
// }

// //do...while ciklas pirmiausia įvykdys kūną, tada patikrins būklę ir, kol tai tiesa, vėl ir vėl ją vykdys.
// let a = 10;
// do {
//   console.log(a);
//   a++;
// } while (a < 20);

// for (let i = 0; i < 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//     i++;
//   }
// }

// let x = 9;

// for (i = x; i >= 1; i--) {
//   console.log("Hello" + i);
// }

// const haHa = "Ha";
// const repeat = 5;

function getLaugh(times) {
  let result = "";
  for (let i = 0; i < repeat; i++) {
    result += `${haHa}`;
  }
  console.log(result);
}

getLaugh();

//

function getLaugh(num) {
  let message = "";
  for (let i = 0; i < num; i++) message += "ha";
  return message;
}

console.log(getLaugh(5));

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;

  return num;
}
