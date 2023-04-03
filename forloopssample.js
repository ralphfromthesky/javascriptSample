let num = [4, 2, 7, 1, 3]; // example input array
let N = num.length;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (num[j] < num[i]) {
      let temp = num[i];
      num[i] = num[j];
      num[j] = temp;
    }
  }
}

console.log("The sorted array is: " + num);
