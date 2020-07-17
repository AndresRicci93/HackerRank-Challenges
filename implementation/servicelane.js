let n = 8;
// //variable
let t = 5;
// //variable
let arr = [2, 3, 1, 2, 3, 2, 3, 3];
// //variable

let cases = [
  [0, 3],
  [4, 6],
  [6, 7],
  [3, 5],
  [0, 7],
];

let x = [];
let y = [];

cases.forEach((caso) => x.push(caso[0]));
cases.forEach((caso) => y.push(caso[1]));

console.log(y);
console.log(x);

for (let i = 0; i <= x.length; i++) {
  let start = x[i];
  let finish = y[i];

  console.log(start + " " + finish);
}

let numbers = [];

for (var i = x[i]; i < y[i] + 1; i++) {
  numbers.push(i);

  return numbers;
}


console.log(numbers);
//function getAllNumbersBetween(cases) {
  // var numbers = [];
  // for (var i = x ; i < y + 1; i++) {
  //   numbers.push(i);
  // }
  // return numbers;
  //console.log(cases);
//}

//console.log(getAllNumbersBetween(cases));

// console.log(cases[0]);

// let a = arr.indexOf(0);
// let b = arr.indexOf(3);

// var data = arr.splice(3, 5);

// console.log(data);
// const servicelane = (cases) => {

// console.log(cases);

// }

// console.log(servicelane(cases));
