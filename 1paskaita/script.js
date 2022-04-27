// sukuriame kintamuosius su const. ju negalima pakeisti toliau kode.

const myDogName = "Mege";

// sukuriame kintamuju "dezutes"

let myName;
let age;
let mySurname;
let fullName;
let result;
let average;
let percent;
console.log(myName); // undefined - kai kintamasis  yra sukurta, bet neturi reiksmes.
// priskiriam reiksmes
myName = "Gedas"; // reiksme apsirasanti tarp kabuciu
age = 30; // reiksme apsirasanti is skaiciu. Sveikas skaicius pvz 10 arba su kableliu 3.14
mySurname = "Sarulis";
fullName = myName + " " + mySurname; // sudetis vyksta tarp dvieju tupaciu tipu, galima daryt ir tarp skirtingu, bet geriau naudoti vienodos sudeties.
result = age + age + 9;
result = result + result;
average = (12 + 2 + 3 + 12 + 3) / 5;
// is viso surinko 60 as antesiau 20 eur

// percent = (100 * 20) / 60;
// console.log(percent + "%"); // number + string = string
// console.log(percent); // number + number = number
// console.log(average);
// console.log("$" + average);

// console.log(9 + 9);
// console.log("9" + "9");

// console.log(myName);
// console.log(myDogName);

// kada naudoti let ir const?
// naudoti let tik tada , kai reiksme yra kintanti, kitais atvejais naudoti const.

const yes = true; // teigiama reiksme
const no = false; // neigiama reiksme

console.log("Rokaa" == "rokaa"); // Rokas yra lygus rokas = false
console.log(10 == 10); // 10 yra lygu 10 = true
console.log(10 != 10); // 10 yra ne lygu 10 = false
console.log(5 != 10); // ar 5 nelygu 10 = true
console.log("10" == 10); // dviguba lygybe tikrina ar reiksme yra lygi
console.log("10" === 10); //  triguba lygybe tikrina ar reiksme yra lygi ir tipas yra toks pats.

console.log("4" != 4);
console.log("4" !== 4);

// visos neigiamos reiksmes yra- undefined, null, 0, "", false
// VIsada naudojam triguba lygybe "===" ar"!==" tikrina reiksme ir tipa
