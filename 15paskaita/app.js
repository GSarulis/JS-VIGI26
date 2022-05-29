const myStyles = ["Jazz", "Blues"];
myStyles.push("Rock-n-Roll");

console.log(myStyles);

myStyles.splice(1, 1, "Classsic");
console.log(myStyles);
myStyles.shift(0);
const fruitY = myStyles.shift(0);
console.log(fruitY);
