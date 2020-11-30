// map

// const array1 = [0, 1, 2, 3, 4];
// const newArray1 = array1.map((output, index) => {
//   return `${index}番目は${output}です。`;
// });

// console.log(newArray1);

// const array2 = ["takuya", "nobuto", "sinntaro", "akira", "katsuya"];
// const newArray2 = array2.map((output, index) => {
//   return `${index}番目は${output}さんです。`;
// });

// console.log(newArray2);

// filter
const array1 = [1, 2, 3, 4, 5];
const newArray1 = array1.filter((output, index) => {
  return output > 3;
});

console.log(newArray1);

const array2 = ["takuya", "nobuto", "shintaro", "akira", "katsuya"];
const newArray2 = array2.filter((o, i) => {
  return o === "shintaro";
});

console.log(newArray2);

const newArray3 = array2.filter((o, i) => {
  return o.length > 6;
});

console.log(newArray3);
