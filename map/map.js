const num = [1,2,3,4,5,6,7,8,9];
const language = 'javascript';


var newNum = num.map(num => num * 5);
console.log(newNum)

var newNum2 = num.forEach((num) => console.log(num))

var newNum3 = num.find((num) =>  num > 1)
console.log(newNum3)


const newNum4  = num.reduce((a, b) => a + b)
console.log(newNum4)

const newNum5 = num.some((num) => num % 1 === 0)
console.log(newNum5)


const adding = (a, b, c) => {
    return a + b + c
}
console.log(adding(1,2,3))
console.log(language[1].toUpperCase());
console.log(language.at(2));
console.log(language.at(-1).toUpperCase())
console.log(language.substring(0, 4))