let n = 5;

let arr = [7, 1, 3, 4, 1, 7];

let pos = -1;



function minimumdistances(arr) {
  for (let i = 0; i <= n; i++) {
   

        pos++;

        console.log( pos + " - " +  arr[i]);
    
  }
}

console.log(minimumdistances(arr));
