let array = [1, 2, 3, 4, 5];
//deleting first element in the array
array.shift();
console.log(array); //[ 2, 3, 4, 5 ]


let arr2 = [1, 2, 3, 4, 5];
//adding element in the first of array
arr2.unshift(9);
console.log(arr2);//[ 9, 1, 2, 3, 4, 5 

let arr = [1, 2, 3, 4, 5];
//removint the last elemt
arr.pop();
let arrpop = arr.pop();
console.log(arr); //[ 1, 2, 3 ]
console.log(arrpop); // 4

let randomArr = [1, 2, 3, 4, 5];
//adding at the last element of array
randomArr.push(100);
console.log(randomArr); //[ 1, 2, 3, 4, 5, 100 ]  

let thisArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 1; i <= 9; i++) {
  //for randoming the array
  thisArray.sort(() => Math.random() - 0.5);
  //for arranging ascend array
  thisArray.sort((a, b) => a - b);
  //for reversing the array
  thisArray.sort((a, b) => b - a);
  // you can also use thisArray.reverse();
}
console.log(thisArray);

let string = ["name", "friends", "tropa", "enemy"];
let k = string.join("-");
console.log(`===================${k}`); //===================name-friends-tropa-enemy

let thisArrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for sum up all the number array
let sumAll = thisArrayNumbers.reduce((a, b) => a + b);
console.log("the total is " + sumAll); //the total is 45

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let i = 0; i < newArray.length; i++) {
  //sum up the array
  sum += newArray[i];
}
console.log("the overall total is " + sum);// the overall total is 45

let anotherArray = [];
for (let i = 0; i < 10; i++) {
  //generate 4 digit number with no negative
  anotherArray.push(Math.floor(Math.random() * (9999 - 1000 + 1)) + 100);
  //anotherArray.push(Math.floor(Math.random() * (500 - 100 + 1) + 1) + 1);
}
console.log("the random total is >-------> " + anotherArray); //the random total is 4184,338,5612,2101,8682,6352,8313,3654,8659,2274

let ramdomer = [];
let total = 0;
for (let i = 0; i < 100; i++) {
  // sum up of all generated number
  ramdomer.push(Math.floor(Math.random() * (999999 - 100000 + 1)) + 100);
  total += ramdomer[i];
}
console.log("the total of generated random number is " + " " + total); //the total of generated random number is  46208297


let anotherArrayNum = [];
let sumUp = 0;
for (let i = 1; i < 10; i++) {
  // sum up numbers in array
  sumUp += anotherArray.push(i);
}
console.log(" the total is this " + " " + sumUp); // the total is this  135

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
console.log("this sum " + " " + thisSum);

let y = [];
y.push(Math.floor(Math.random() * (100 - 1)) + 100);
let me = y.reduce((a, b) => a + b);
console.log(me);

const newlyArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const theResult = newlyArray.map((a) => a.reduce((a, b) => (a + b) * 2));
console.log("this is the result of .map the .reduce " + " " + theResult);//this is the result of .map the .reduce  6,14,22


let arr4 = [2, 4, 6, 8, 10];
//double the total number of array or even triple
let doubled = arr4.map((a) => a * 2);
let computed = arr4.map((x) => x * 100);
let reduceFunction = arr4.reduce((a, b) => a + b);
console.log("this is the result of " + " " + reduceFunction);
console.log(doubled);
console.log(`this is sample of map returning new array  --------> ${computed}`);


let p = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
p.sort((a, b) => b - a);
p.sort(() => Math.random() - 0.5);
console.log(p);

let randomNum = [];
//generate 6 digit random number
randomNum.push(Math.floor(Math.random() * (999999 - 100000 + 1)) + 100);
console.log("the 6 digit number is " + " " + randomNum);

let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// triple each element in array
let tripleValue = array5.map((a) => a * 3);
let menu = tripleValue.reduce((a, b) => a + b);
console.log(tripleValue);
console.log(menu);

let emptyArray = [];
for (let i = 0; i < 10; i++) {
  //push random number inside array
  emptyArray.push(Math.floor(Math.random() * (999 - 100) + 1) + 1);
}
console.log("random 3 digittttt" + " " + emptyArray);

// let test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// test.splice(test.indexOf(2), 5);
// console.log("this is the result of splice" + test);

let arr3 = [1, 2, 3, 4, 5, 7, 8, 9, 10];
//deleting then adding element inside array
arr3.splice(2, 2, "add");
console.log("this is the splice method technique" + " " + arr3); //this is the splice method technique 1,2,add,5,7,8,9,10

const findDuplicates = (dope) => {
  let duplicate = [];

  for (let i = 0; i < dope.length; i++) {
    for (let j = i + 1; j < dope.length; j++) {
      if (dope[i] === dope[j] && !duplicate.includes(dope[i])) {
        duplicate.push(dope[i]);
      }
    }
  }
  return duplicate;
};
let ran = [1, 4, 6, 7, 3, 2, 9, 87, 7, 1, 1];
console.log("this is the duplicates " + " " + findDuplicates(ran));

let test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
test.splice(test.indexOf(2), 6, "this");
console.log("this is the result of splice" + " " + test); //this is the result of splice 1,this,8,9

let tests = [1, 2, 3, 4, 5, 6, 7, 8, 9];
tests.splice(3, 2, "thiS");
console.log("this is splice " + tests); //this is splice 1,2,3,thiS,6,7,8,9

//function for adding array of numbers
let arrNum = [1, 2, 3, 4, 5];
const addNum = (arr) => {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num += arr[i];
  }
  return num
};
console.log("thisss " + addNum(arrNum)); //thisss 15

//function for reversing array of string
const reverse = (abcd) => {
  let reversedString = "";
  for (let i = abcd.length - 1; i >= 0; i--) {
    reversedString += abcd[i];
  }
  return reversedString;
};

let abcd = ["a", "b", "c", "d", "e", "f"];
console.log(reverse(abcd)); //fedcba

//for random string array
const randomAbcd = (abcd) => {
  let sortedString = abcd.sort(() => Math.random() - 0.5);
  return sortedString;
};

let abcde = ["f", "b", "c", "d", "e", "a"];
console.log(randomAbcd(abcde));

//for alphabeticals of string
const alphabeticals = (abcd) => {
  let sortedString = abcd.sort().join("-").toUpperCase();
  return sortedString;
};

let abcdef = ["a", "b", "c", "d", "e", "f"];
console.log(alphabeticals(abcdef)); //A-B-C-D-E-F

// const multiply = (a, b) => {
//   return a * b * 3;
// };
// console.log("this is multiply " + multiply(2, 2));

//function for returning even nums
let even = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenThis = [];
const evenNum = (enums) => {
  for (let i = 2; i <= even.length; i++) {
    if (i % 2 == 0) {
      enums.push(i);
    }
  }
  return enums;
};
console.log("this is even result " + evenNum(evenThis)); //this is even result 2,4,6,8,10

//printing array of string
let fruits = ["apple", "banana", "orange"];
const fruiters = (fruit) => {
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruit[i]);
  }
};
fruiters(fruits);

//capitalizing fir letter of string
let myName = "ralph";
const capitalize = (cap) => {
  return cap.charAt(0).toUpperCase() + cap.slice(1);
};
console.log("this is the name " + " " + capitalize(myName)); //this is the name  Ralph

// function for randoming random array
let randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const randomArrays = (pasamo) => {
  return pasamo.sort(() => Math.random() - 0.5);
};
console.log("this is the random array " + " " + randomArrays(randomArray));


let reversed = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reversing = (rev) => {

  return rev.sort((a, b) => a - b);
};
console.log("arrange order " + " " + reversing(reversed));

// reversing array
let str = "santolorin";
const reverseString = (revs) => {
  return revs.split("").reverse().join("");
};
console.log("this is the reverse string" + " " + reverseString(str)); //this is the reverse string nirolotnas

//number of words
let hisName = "ralph";
const countWords = (str) => {
  return str.length;
};
console.log("this is the total of letters " + " " + countWords(hisName));

let hisNames = hisName.length;
console.log(hisNames);

//function for getting longest string array and longest name
let randomName = ["ralph", "shiela", "ted", "ed", "rosario"];
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
  return `${longest} and ${thisWord}`;
};
console.log(findLongestWord(randomName));

//for filtering even num and retun new even array
let thisIsEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterArray = (arr) => {
  let even = [];
  for (let i = 2; i < arr.length; i++) {
    if (i % 2 == 0) {
      even.push(i);
    }
  }
  return even;
};
console.log("this is even numbers " + " " + filterArray(thisIsEven));

//finding average of numbers array
let average = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1000];
const findingAverage = (ave) => {
  let newGrade = 0;
  let grade = 0;
  for (let i = 0; i < ave.length; i++) {
    grade += ave[i];
  }
  return newGrade = grade / ave.length;
};
console.log("this is the grade" + " " + findingAverage(average)); //this is the grade 104.5

//for merging arrays of number
let arrA = [9, 8, 7, 6];
let arrB = [5, 4, 3, 2];
const mergeArrays = (arr1, arr2) => {
  return arr1.concat(arr2).sort((a, b) => a - b);
};
console.log(mergeArrays(arrA, arrB));

//for checking duplicate num
let duplicateNum = [1, 1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 0, 0];
const removeDuplicates = (arr) => {
  let newDup = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !newDup.includes(arr[i])) {
        newDup.push(arr[i]);
      }
    }

  }
  return newDup;
};

console.log("-----------" + removeDuplicates(duplicateNum));

//function for returning array of string then capitalized it first letter
let names = ["ralph", "rigor", "santolorin"];
const capitalizeArray = (arr) => {
  const capitalizedArray = arr.map((p) => {
    return p.charAt(0).toUpperCase() + p.slice(1);
  });

  return capitalizedArray;
};

console.log(capitalizeArray(names));
// function for returning ALL CAPITAL IN STRING OF ARRAY
const upperCase = (arr) => {
  let cap = arr.map((capital) => {
    return capital.toUpperCase();
  })
  return cap;
};
console.log(upperCase(names)); //[ 'RALPH', 'RIGOR', 'SANTOLORIN' ]

let thisNum = ["ralph", "rigor"];
const namer = (arr) => {
  let thisNum = arr.map((a) => {
    return a.charAt(0).toUpperCase() + a.slice(1);
  });
  return thisNum;
};

console.log(namer(thisNum)); // is the grade 104.5

//for reversing function
let revNums = [1, 2, 3, 4, 5];
const reverseNumber = (arr) => {
  return arr.sort((a, b) => b - a);
};
console.log(reverseNumber(revNums));

let yy = thisArray.sort(() => Math.random() - 0.5);
console.log(yy);

let thisNumber = '10.153546876464';
let m = parseFloat(Math.floor(thisNumber));
console.log(m);

let letters = ['d', 'e', 'a', 'b', 'f', 'c'];
const alphabetically = (arr) => {
  for (let i = 0; i < letters.length - 1; i++) {
    for (let j = i + 1; j < letters.length; j++) {
      if (letters[i] > letters[j]) {
        let temp = letters[i];
        letters[i] = letters[j];
        letters[j] = temp;
      }
    }
  }
  return arr;
}
console.log(alphabetically(letters)); // Output: ['a', 'b', 'c', 'd', 'e', 'f']

let dupNumber = [1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 8, 9, 9];
let thisDuplicate = [];
const getDup = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !thisDuplicate.includes(arr[i])) {
        thisDuplicate.push(arr[i]);
      }
    }
  }
  return thisDuplicate;
}
console.log(getDup(dupNumber));

let love = [1, 2, 3, 4, 5];
love.sort(() => Math.random() - 0.5)
console.log(love);
love.sort((a, b) => b - a);
let iiiiiii = love.sort((a, b) => b - a);
console.log(iiiiiii)

let thisEmptyArray = [];
thisEmptyArray.push(Math.floor(Math.random() * (999 - 100) + 1) + 1);
console.log(thisEmptyArray);

const Capitalname = (ha) => {
  return ha.length;
}
console.log(Capitalname(str));

//searching ngmae of an array
let randomNames = ['ralph', 'tess', 'mharie', 'como', 'louis'];
for (let i = 0; i < randomNames.length; i++) {
  if (randomNames[i] == 'como') {
    console.log(' i found the name of: ' + randomNames[i]);
    break;
  }
}

const multiply = (a, b) => {
  return a * b * 3;
};
console.log("this is multiply " + multiply(2, 2));

let numArray = [9, 5, 4, 8, 2, 4, 6, "a"];
let ok = numArray.includes(1);
console.log("this is the includes " + ok); //this is the includes false

let thisNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const addingNum = (arr) => {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num += arr[i];
  }
  return num
}

console.log(addingNum(thisNumArr));

let forMap = [1, 2, 3, 4, 5];
let anuhan = forMap.map((forMap) => {
  return forMap * 2;
})
console.log(anuhan);
///generate number with no duplicate
let lottoNum = [];
let usedNumbers = []; // Array to keep track of generated numbers
while (lottoNum.length < 6) {
  // Generate a random number between 1 and 58 (inclusive)
  let randomNumber = Math.floor(Math.random() * 58) + 1;

  // Check if the number is not already used
  if (!usedNumbers.includes(randomNumber)) {
    lottoNum.push(randomNumber);
    usedNumbers.push(randomNumber); // Add the number to the usedNumbers array
  }
}

let win = lottoNum.join('-');
console.log(`------>${win}`);
/////////////////////////
