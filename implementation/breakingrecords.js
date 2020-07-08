let n =20;

let scores = [17,45,41,60,17,41,76,43,51,40,89,92,34,6,64,7,37,81,32,50];

let best = 0;
let worst = 0;
function breakingRecords(scores) {
  //let min = arr[i];
  //console.log(arr);
  let max = scores[0];
  
  let min = scores[0];

  for (let i = 0; i <= n - 1; i++) {

        if(scores[i] > max) {
    
         // console.log(max);
          max = scores[i]
          best++

         } else if(scores[i] < min) {            
           
             console.log(worst)
             min = scores[i]
             worst++;
            }
         

    console.log("max is: " +max);
    console.log("min is: " +min);
  }

  return [best, worst]
}

console.log(breakingRecords(scores));
