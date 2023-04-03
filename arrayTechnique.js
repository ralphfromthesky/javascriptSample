let array = [1, 2, 3, 4, 5];
//deleting first element in the array
array.shift();
console.log(array);

let arr2 = [1, 2, 3, 4, 5];
//adding element in the first of array
arr2.unshift(9);
console.log(arr2);

let arr3 = [1, 2, 3, 4, 5];
//deleting then adding element inside array
arr3.splice(0, 1, 12);
console.log(arr3);

let arr = [1, 2, 3, 4, 5];
//removint the last elemt
arr.pop();
let arrpop = arr.pop();
console.log(arr);
console.log(arrpop);


let thisArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 1; i <= 9; i++) {
  //for randoming the array
  thisArray.sort(() => Math.random() - 0.5);
  //for arranging ascend array
  thisArray.sort((a, b) => a - b);
  //for reversing the array same with  thisArray.reverse();
  thisArray.sort((a, b) => b - a);
}
console.log(thisArray);

let string = ["name", "friends", "tropa", "enemy"];
let k = string.join("+");
console.log(k);

let thisArrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for sum up all the number array
let sumAll = thisArray.reduce((a, b) => a + b);
console.log("the total is " + sumAll);

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let i = 0; i < newArray.length; i++) {
  //sum up the array
  sum += newArray[i];
}
console.log("the overall total is " + sum);

let anotherArray = [];
let anotherSum;
for (let i = 0; i < 10; i++) {
  //generate 4 digit number with no negative
  anotherArray.push(Math.floor(Math.random() * (9999 - 1000 + 1)) + 100);
}
console.log("the random total is " + anotherArray);

let ramdomer = [];
let total = 0;
for (let i = 0; i < 100; i++) {
  // sum up of all generated number
  ramdomer.push(Math.floor(Math.random() * (999999 - 100000 + 1)) + 100);
  total += ramdomer[i];
}
console.log("thie total of generated random number is " + " " + total);

let anotherArrayNum = [];
let sumUp = 0;
for (let i = 1; i < 10; i++) {
  // sum up numbers is array
  sumUp += anotherArray.push(i);
}
console.log(sumUp);

let arrayNum = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let thisSum = 0;
for (let i = 0; i < 20; i++) {
  //for sorting array num reverse
   arrayNum.sort((a, b) => b - a);
  // //for randoming array number
  arrayNum.sort(() => Math.random() - 0.5);
  // for summing all array of numbers
  thisSum += arrayNum.push(i);
}
console.log(arrayNum);
console.log(thisSum);

let y = [];
y.push(Math.floor(Math.random() * (100 - 1)) + 100);
let me = y.reduce((a, b) => a + b);
console.log(me);

const newlyArray = [[1, 2], [3, 4], [5, 6]];
//double each sum for array
const theResult = newlyArray.map(a => a.reduce((a, b) => a + b));
console.log(theResult);

let arr4 = [2, 4, 6, 8, 10];
//double the total number of array or even triple
let doubled = arr4.map(a => a * 2);
console.log(doubled);


let p = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
p.sort((a, b) => b - a);
p.sort(() => Math.random() - 0.5);
console.log(p);

let randomNum = [];
for (let i = 0; i < 1; i++){
  //generate 
  randomNum.push(Math.floor(Math.random() * (999999 - 100000 +1)) + 100);
}
console.log("the 6 digit number is " + " " + randomNum);

let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// triple each element in array
let doublee = array5.map(a => a * 3);
let menu = doublee.reduce((a, b) => a + b);
console.log(doublee);
console.log(menu);

let emptyArray = [];
for (let i = 0; i < 1; i++) {
  //push random number inside array
  emptyArray.push(Math.floor(Math.random() * 6 - 1 + 1) + 1);
}
console.log(emptyArray);
