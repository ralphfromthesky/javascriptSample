let arr1 = [1, 2, 3, 4, 5]
arr1.shift();
console.log(arr1) // [2,3,4,5]

arr1.unshift(10)
console.log(arr1) //[10,2,3,4,5]

arr1.pop()
console.log(arr1) //[10,2,3,4]

arr1.push(1500)
console.log(arr1) //[10,2,3,4,1500]

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
arr2.sort(() => Math.random() - 0.5)
console.log(arr2)

arr2.sort((a, b) => b - a);
console.log(arr2) // [9,8,7,6,5,4,3,2,1]

arr2.reverse()
console.log(arr2)

let names = ['ralph', 'rigor', 'santolorin']
let a = names.join('/')
console.log(a) //ralph/rigor/santolorin

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
let num1 = numbers.reduce((a, b) => a + b)
console.log(num1) // 45

const addAll = () => {
    let sum = numbers.reduce((a, b) => a + b);
    console.log(sum)
    return sum;

}

addAll();

const usingForloop = () => {
    let a = 0
    for (let i = 0; i < numbers.length; i++) {
        a += numbers[i]
    }
    console.log(a)
    return a;
}

usingForloop()

const sixDigit = () => {
    let num = [];
    num.push(Math.floor(Math.random() * (999999 - 100000 + 1)) + 100);
    console.log(num)
    return num;
}
sixDigit()

const generateDigit = () => {
    let num = [];
    let sum = 0
    for (let i = 0; i < 5; i++) {
        num.push(Math.floor(Math.random() * (999999 - 100000 + 1)))
        sum += num[i]
    }
    console.log(`${num} and this is the ${sum}`);
    return num;
}
generateDigit()

let numbers2 = [1, 2, 3, 4, 5, 7, 8, 9, 9, 8]
const usingMap = () => {
    let num = numbers2.map((x) => x * 5)
    console.log(num)
}
usingMap();

const findDuplicates = (dup) => {
    let duplicate = [];
    for (let i = 0; i < dup.length; i++) {
        for (let j = i + 1; j < dup.length; j++) {
            if (dup[i] === dup[j] && !duplicate.includes(dup[i])) {
                duplicate.push(dup[i])
            }
        }
    }
    console.log(duplicate)
    return duplicate;
}
findDuplicates(numbers2);

let test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
test.splice(test.indexOf(2), 6, "this");
console.log("this is the result of splice" + " " + test);

const capitalFirst = (cap) => {
    let names = cap.map((name) => name.charAt(0).toUpperCase() + name.slice(1));
    console.log(names);
    return names
}
console.log(capitalFirst(names))

// let alphaBet = ['anna', 'barbie', 'cindy', 'dina','elena']

// const newNames = (s) => {
//     const newN = s.map((name) => {
//        return name.sort((a,b) => b- a)
//     })
//     console.log(newN)
// }
// newNames(alphaBet);
let alphaBet = ['anna', 'barbie', 'cindy', 'dina', 'elena'];

const newNames = (s) => {
    const newN = s.sort((a, b) => b.localeCompare(a));
    console.log(newN);
}

newNames(alphaBet);

let student = [
    { 'name': 'ralph', 'grades': 90 },
    { 'name': 'shenron', 'grades': 80 },

    { 'name': 'gadwin', 'grades': 85 },

    { 'name': 'james', 'grades': 70 },

    { 'name': 'phia', 'grades': 75 },

]

let passed = student.filter(x => x.grades < 80) //using to filter to look for student whos grade is less than 80
console.log(passed)

let num = [10, 30, 45, 55, 68, 25];
let newNum = num.filter(x => x > 50)
console.log(newNum);

let newStudents = student.filter(x => x['name'].startsWith('p')); // use also filter for searching names 
console.log(newStudents)

let newNum2 = num.filter((x) => {
    return x > 10;
})
console.log(newNum2)


const lookForNum = (arr) => {
    let a = arr.reduce((a, b) => a + b)
    console.log(a)
    return a;
}
lookForNum(num);
let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const divisible = (num) => {
    let divs = [];
    for (let i = 2; i < num.length; i++) {
        if (i % 2 == 0) {
            divs.push(i)
        }
    }
    return divs
}
console.log(divisible(numbers3))