// console.log("11 paskaita objektai.");

// const emptyObject = {}; // tuscias objektas

// const user = {
//   name: "gedas30",
//   password: "gedas123",
//   mail: "gedas@gedas.com",
//   age: "30",
//   gender: "male",
// };

// console.log(user.name + user.password);
// console.log(user["gender"]);

// function getItem(key) {
//   return user[key];
// }

// console.log(getItem("gender"));

// const candle = {
//   color: "green",
//   taste: "apple",
//   height: 8,
//   radius: 8,
//   turnLight: () => {
//     console.log(
//       `${candle.color} candle spreadig tasteful ${candle.taste} smell`
//     );
//   },
//   calculateLightTime: () => {
//     const metric = candle.height * candle.radius;
//     if (metric > 60) {
//       return 180;
//     } else if (metric > 30) {
//       return 90;
//     } else {
//       return 45;
//     }
//   },
// };

// candle.turnLight();
// const minutes = candle.calculateLightTime();
// console.log(minutes);

// const cat = {
//   name: "Kleopatras",
//   age: 15,
//   color: "black",
//   weight: 7,
//   eat: () => {
//     console.log(`${cat.name} is eating...`);
//   },
//   sleep: () => {
//     console.log("Cat is sleeping...");
//   },
//   description: () => {
//     console.log(`${cat.name} is a ${cat.color} cat amd ${cat.age} old age.`);
//   },
// };

// // console.log(`${cat.name} is a ${cat.color} cat amd ${cat.age} old age.`);

// const codeClass = {
//   type: "remote",
//   subject: "Front-end + Node.js",
//   lecturer: {
//     name: "Rokas",
//     surname: "Andrikenas",
//     age: 23,
//     experience: 3,
//   },
//   students: ["Gediminas", "Edvinas", "Liudmila", "Rima", "Karolis"],
// };

// console.log(codeClass.lecturer.age);
// const lecturerFullName = `${codeClass.lecturer.name} ${codeClass.lecturer.surname}`;
// console.log(lecturerFullName);
// const studentsCount = codeClass.students.length;
// console.log(studentsCount);

const TreeForm = document.getElementById("tree-form");
TreeForm.addEventListener("submit", handleSubmitTreeForm);
function handleSubmitTreeForm(event) {
  event.preventDefault();

  const treeName = document.querySelector("input[name='tree-name']");
  const treeAge = document.querySelector("input[name='tree-age']");

  //   console.log(treeAge.value);
  //   console.log(treeName.value);
  const age = Number(treeAge.value);
  const name = treeName.value;

  const tree = {
    name: name,
    age: age,
    // isOld: age > 100 ? "Old" : "Young",
    isOld: age > 100 ? true : false,
  };

  console.log(tree);
}
