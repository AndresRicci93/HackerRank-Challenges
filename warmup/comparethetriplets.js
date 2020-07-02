let a = [5,6,7];
let b = [3,6,10];
let Alice = 0;
let Bob = 0;
function comparethetriplets(a,b) {

for (let i = 0; i <= a.length; i++) {

    
    if (a[i] > b[i]) Alice++;
    if (a[i] < b[i]) Bob++;
 }

return Alice + ' ' + Bob;
}


console.log(comparethetriplets(a,b));