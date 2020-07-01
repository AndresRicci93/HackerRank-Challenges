let arr = [7, 69, 2, 221, 8974];
let sum = 0;
let sum2 = 0;


arr.sort(function (a, b) {
  return a - b;
});


function minmax(arr) {

  arr.sort(function (a, b) {
    return a - b;
  });

  for (let i = 1; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  
  arr.pop();

  for (let i = 0; i <= arr.length - 1; i++) {
    sum2 += arr[i];
  }

  console.log(sum2 + ' ' + sum);

}

console.log(minmax(arr));