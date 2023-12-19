const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const a = "ralph";
const arrChecks = (a) => {
  if (Array.isArray(a)) {
    console.log("yes");
  } else {
    console.log("no");
  }
};
arrChecks(arr);
console.log(arr.sort((a, b) => b - a));
console.log(arr.sort(() => Math.random() - 0.5));

const addingArr = (x) => {
  let a = 0;
  for (let i = 0; i < x.length; i++) {
    a += x[i];
  }
  return a;
};
console.log(addingArr(arr));

const mapThisArr = (x) => {
  return x.map((value) => value * 2);
};
console.log(mapThisArr(arr))

const thisIsReduce = (x) => {
    return x.reduce((a, b) => a + b);
}
console.log("this is reduce " + thisIsReduce(arr))