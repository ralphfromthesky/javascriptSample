const animal = ["dog", "cat", "horse", "bird", "duck"];
const loopAll = (a) => {
    var result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(a[i])
}
  return result;
};

console.log(loopAll(animal))
const animalLog = animal.filter((a) => a.startsWith('c'))
const findAnimal = animal.find(animal => animal.includes('h'));
console.log(findAnimal)
const filterAnimal = animal.filter((anim) => anim.length == 2)
console.log(filterAnimal)

const animalNames = ["dog", "cat", "horse", "bird", "duck"];
// Using .map() to transform the array of strings into an array of objects
const animalObjects = animalNames.map(name => ({
  name: name,
  length: name.length
}));

console.log("Original array of strings:", animalNames);
console.log("Array of objects:", animalObjects);

const filteredAnimals = animalNames.filter((animals) => animals.length > 3)
console.log(filteredAnimals)

const students = {
  primary: [
    { 'name': 'ralph', 'grade': 90 },
    { 'name': 'ted', 'grade': 80 },
    { 'name': 'gadwin', 'grade': 95 },
    { 'name': 'shenron', 'grade': 100 }
  ],
  secondary: [
    { 'name': 'alex', 'grade': 88 },
    { 'name': 'emma', 'grade': 92 },
    { 'name': 'olivia', 'grade': 85 }
  ],
  highschool: [
    { 'name': 'william', 'grade': 78 },
    { 'name': 'sophia', 'grade': 94 },
    { 'name': 'michael', 'grade': 89 }
  ]
};

console.log(students.highschool[2].grade)

const studentGrade = students.highschool.filter((x) => x.grade < 93)
console.log(studentGrade)