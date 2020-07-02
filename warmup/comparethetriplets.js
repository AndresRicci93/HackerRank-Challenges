let a = [5,6,7];
let b = [3,7,10];
let Alice = 0;
let Bob = 0;
let result = [];
function compareTriplets(a, b) {

    for (let i = 0; i <= a.length; i++) {
    
        
        if (a[i] > b[i]) {
            Alice++;
        }
    
        else if (a[i] < b[i]) {
            Bob++;
        }
     }

     result[0] = Alice;
     result[1] = " ";
     result[2] = Bob;
     
     
     return result;
    
    }


console.log(comparethetriplets(a,b));

