//make me function for adding 2 numbers


function random_shuffle() {
  const arr = Array.from({ length: 54 }, (_, i) => i + 1); // create an array of numbers from 1 to 54
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // choose a random index between 0 and i (inclusive)
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap the elements at indices i and j using destructuring assignment
  }
  return arr;
}

const shuffledArray = random_shuffle(); // shuffledArray is an array of length 54 containing a random sequence of numbers from 1 to 54
console.log(shuffledArray);

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function averageArray(arr) {
  if (arr.length === 0) return 0;
  return sumArray(arr) / arr.length;
}

const arr = [1, 2, 3, 4, 5];
const sum = sumArray(arr); // sum is 15
const average = averageArray(arr); // average is 3
