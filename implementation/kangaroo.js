let x1 = 0;
let v1 = 3;
let x2 = 4;
let v2 = 2;

const kangaroo = (x1, v1, x2, v2) => ( v2 >= v1 || (x2-x1)%(v1-v2) != 0) ? "NO" : "YES";

console.log(kangaroo(x1, v1, x2, v2));