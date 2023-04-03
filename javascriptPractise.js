const isEquall100 = (a, b) => a === 100 || b === 100 || a + b === 100;
console.log(isEquall100(100, 0));
console.log(isEquall100(0, 100));
console.log(isEquall100(20, 80));
console.log(isEquall100(50, 50));

const setDate = (date = new Date()) => {
  const days = date.getDate() + 1;
  const month = date.getMonth() + 1;
  const years = date.getFullYear();
  return `${days}/ ${month}/ ${years}`;
};
console.log(setDate());

const thisFunction = (a, b) => {
  return a + b;
};

let x = thisFunction(5, 5);
console.log(x);

let array = [1, 2, 3, 4, 5];

array.sort(() => Math.random() - 0.5);
for (let i = 0; i < 5; i++)
    console.log("this is ramdom " + array[i]);

let arr = [array];
arr.sort((a, b) => a - b);
// arr is now [1, 2, 3, 4]
console.log(arr);

const a = (a, b) =>  a + b ;
console.log(a(1, 1));

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(number => number * 2);
for (let i = 0; i < 5; i++){
    doubledNumbers.sort(() => Math.random() - 0.5);
    console.log(doubledNumbers[i])
}

const numberss = [1, 2, 3, 4, 5];
const sums = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sums); // 15


let number = [4, 7, 2, 9, 3];

// for  Calculate sum
let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum += number[i];
}

// this is for Calculating the average
let average = sum / number.length;


console.log(`The sum of the array is ${sum}`);
console.log(`The average of the array is ${average}`);

let myArray = [1, 2, 3, 4, 5];
let reversedArray = myArray.reverse(); 

console.log(reversedArray);

let weightedArray = [
  { value: 'A', weight: 30 },
  { value: 'B', weight: 40 },
  { value: 'C', weight: 20 },
  { value: 'D', weight: 10 },
];

// Generate a random number between 0 and the sum of all weights
let randomNumber = Math.random() * weightedArray.reduce((total, item) => total + item.weight, 0);

// Iterate over the array and subtract the weight from the random number
let selectedValue;
for (let i = 0; i < weightedArray.length; i++) {
  randomNumber -= weightedArray[i].weight;
  if (randomNumber <= 0) {
    selectedValue = weightedArray[i].value;
    break;
  }
}

console.log(selectedValue);

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const numbers1 = [1, 2, 3, 4, 5];
const sum1 = numbers.reduce((a, b) => a + b);

console.log(sum1); // 15
