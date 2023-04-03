const a = [1, 2, 3];
a.push(4);
const x = a.push(5);

const arr1 = ["ralph", "rigor", "santolorin"];
const arr2 = [1, 2, 3, 4];
const arr3 = [6, 7, 8, 9];
arr2.push(5);

const ralph = arr1.concat(arr2, arr3);
console.log(ralph);

const b = ["?", "?", "?", "?", "?"];
const c = [].concat(b);
console.log(c);

const person = [
  {
    name: "ralph",
    age: 38,
    location: "navotas",
  },
  {
    name: "gadwin",
    age: 3,
    location: "malabon",
  },
  {
    name: "shenron",
    age: 8,
    location: "makati",
  },
];
person.push({
  name: "shiela",
  age: 27,
  location: "manila",
});
person[3].sex = "male";

const topTierEmployees = [
  { name: "Sarah", score: 97 },
  { name: "John", score: 95 },
  { name: "Rachel", score: 94 },
  { name: "Tom", score: 93 },
];

const midTierEmployees = [
  { name: "Sam", score: 73 },
  { name: "Jennifer", score: 72 },
  { name: "Ralph", score: 70 },
  { name: "Laura", score: 68 },
];

const bottomTierEmployees = [
  { name: "Becky", score: 48 },
  { name: "Jerry", score: 45 },
  { name: "Helen", score: 41 },
  { name: "Toby", score: 38 },
];

/*
  
  Challenges: 
  
  Instructions: Use the array methods you just learned to solve 
  the following challenges. In each array, the employees should be
  listed in order of rank, from highest to lowest. 
  
  1.  I forgot to add {name: "Michelle", score: 98} and 
      {name: "Zeke", score: 90} to the topTierEmployees array! 
      Please add them to the array in the appropriate spots. 
      This should take you two steps. 
  
  2.  I also forgot to add {name: "Allen", score: 75} and 
      {name: "Alison", score: 74} to the midTierEmployees array.
      Please add them! This should take you only one step.
  
  3.  I also forgot to add {name: "Emma", score: 36} and 
      {name: "David", score: 32} to the bottomTierEmployees array. 
      Please add them! This should take you only one step.
  
  4.  I need an array of all the employees to send to HR. 
      Please combine the three arrays of the three tiers of 
      employees into a new array called "allEmployees", 
      preserving the order in terms of ranking from highest to 
      lowest. This should take you only one step.
  
  5.  I need another new array of employees to fire, called 
      employeesToFire. Here at Big Corporation Inc., we only want 
      top-tier employees, so please add the mid-tier and bottom-tier 
      employees to it, once again preserving the order of scores 
      from highest to lowest. This should take you only one step.
  
  6.  Create a copy of employeesToFire called "secretFiringList", 
      and add John to it. John is a good employee, but I don't like 
      him, so I want to fire him too — but I want to keep this 
      secret from my company's HR department until the last moment. 
  */

topTierEmployees.unshift({
  //for adding an element in the first of an array
  name: "Michelle",
  score: 98,
});
topTierEmployees.push({
  // for adding element at the last in an array
  name: "Zeke",
  score: 90,
});
//topTierEmployees.shift(); //fpr deleting the first element in the array
//topTierEmployees.pop(); // for deleting the last element in an array
// let me = topTierEmployees[0];
// me.name.toUpperCase()
console.log(topTierEmployees);
console.log(topTierEmployees[2].name.toUpperCase());
console.log(topTierEmployees);
midTierEmployees.unshift(
  { name: "Allen", score: 75 },
  { name: "Alison", score: 74 }
);
console.log(midTierEmployees);

bottomTierEmployees.push(
  {name: "Emma", score: 36}, 
  {name: "David", score: 32}
)
console.log(bottomTierEmployees);

const allEmployees = topTierEmployees.concat(midTierEmployees, bottomTierEmployees);
console.log(allEmployees);

const student = {
  firstname: "ralph",

  get getname() {
    return this.firstname;
  }
}

console.log(student.firstname);
console.log(student.getname);

const names = {
  idNumber: 1,
  surname: "jordan",
  shoeSize: 7,

  get sizes() {
    
   }
}
console.log(names.shoeSize)

  let boy = 5;
  while (boy < 200) {
    console.log(boy);
    boy = boy * 10;
  }

console.log(boy);
function leta() {
  let boss = ['ralph', 'rigor', 'santolorin'];
  for (let employee of boss) {
   console.log(employee)
  }
}
console.log(leta());

for (let y = 0; y < 10; y++) { 
  console.log(y);
}


let m = 0;
while (m <= 20) {
  console.log(m);
  m++;
}

//for iteration
let myArray = ["ralph", "shenron", "gadwin", "mharie", "maco"];
for (let i = 0; i < myArray.length; i++) {
   console.log(myArray[i]);
}

//tryin to search
let myArray2 = ["ralph", "shenron", "gadwin", "mharie", "maco", "enteng", "bentong", "william", "teng"];
for (let i = 0; i < myArray2.length; i++) {
  if (myArray2[i] == "bentong") {
    console.log(" i find the name of " + myArray2[i]);
    break;
  }
}

//while iteration
let theArray = ["shenron", "james", "pia", "gadwin"];
let i = 0;
while (i <= theArray.length) {
  console.log(theArray[i]);
  i++;
}

// if else condition
let age = 20;
if (age > 19 && age == 20) {
  console.log("under age");
} else {
  console.log("enough");
}

let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

for (let i = 0; i < days.length; i++) {
  console.log("today is " + days[i]);
}