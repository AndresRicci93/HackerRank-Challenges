
let i = 20;
let j = 23;
let k = 6;

const beautifulDays = (i,j,k) => {

    let arr = [];  
    let start = i;
    let beautifulDay = 0;
    while (start <= j) {
    
        arr.push(start)  
        start++
    }

   for (let i = arr[0]; i <= j; i++) {

      const reverse = i.toString().split('').reverse().join('')
      const parsed = parseInt(reverse);
         
      let result = (i - parsed) / k;
      Math.abs(result);
      if (Number.isInteger(result)) {
         beautifulDay++;
      }
   }

return beautifulDay;

}





console.log(beautifulDays(i,j,k));