//Write a function called reverseString that takes a string as input and returns the string reversed.
const reverseString = (str) => {
  str.reverse();
  return str;
};

//Write a function called checkPalindrome that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.

//Write a function called countWords that takes a string as input and returns the number of words in the string.
const countWords = (str) => {
  return str.length();
};

//Write a function called findLongestWord that takes an array of strings as input and returns the length of the longest word in the array.
const findLongestWord = (word) => {
  let longest = 0;
  let thisWord = [];
  for (let i = 0; i < word.length; i++) {
    const currentWord = word[i].length;
    if (currentWord > longest) {
      longest = currentWord;
      thisWord = word[i];
    }
  }
  return `${longest} + ${thisWord}`;
};
//Write a function called filterArray that takes an array of numbers as input and returns a new array containing only the even numbers.
const filterArray = (arr) => {
  let even = [];
  for (let i = 2; i < arr.length; i++) {
    if (i % 2 == 0) {
      even.push(i);
    }
  }
  return even;
};

//Write a function called findMedian that takes an array of numbers as input and returns the median value (the middle number, or the average of the two middle numbers if the array has an even length).
const findMedian = () => {};
//Write a function called mergeArrays that takes two arrays of numbers as input and returns a new array containing all the numbers from both arrays, sorted in ascending order.
const mergeArrays = (arr1, arr2) => {
  return arr1.concat(arr2).sort((a, b) => a - b);
};
console.log(mergeArrays(arrA, arrB));
//Write a function called removeDuplicates that takes an array of numbers as input and returns a new array containing only the unique values (no duplicates).
const removeDuplicates = (arr) => {
  let noDuplicate = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !noDuplicate.includes(arr[i])) {
        noDuplicate.push(arr[i]);
      }
    }
  }
  return noDuplicate;
};
const doubleThis = (arr) => {
  let thisNum = arr.map((a) => {
    return a.charAt(0).toUpperCase() + a.slice(1);
  });
  return thisNum;
};

console.log(doubleThis(thisNum));

//Write a function called reverseNumber that takes a number as input and returns the number reversed (e.g. 1234 becomes 4321).
