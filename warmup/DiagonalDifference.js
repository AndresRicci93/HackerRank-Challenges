let arr = [[1, 2, 3],[4, 5, 6],[9, 8, 9]]

function diagonalDifference(arr) {
    // Write your code here
 let LR_total = 0;
 let RL_total = 0;

 for (let i = 0; i < arr.length;i++) {
      LR_total += arr[i][i];
      RL_total += arr[i][arr.length - 1 - i];
 }
return Math.abs(LR_total - RL_total);
}

console.log(diagonalDifference(arr));