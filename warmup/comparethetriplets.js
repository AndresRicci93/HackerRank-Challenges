let a = [5,6,7];
let b = [3,6,10];
let Alice = 0;
let Bob = 0;
function comparethetriplets(a,b) {

for (let i = 0; i <= a.length; i++) {

    //If a[i] > b[i], then Alice is awarded 1 point.
    if (a[i] > b[i]) Alice++;
    //If a[i] , then Bob is awarded 1 point.
    if (a[i] < b[i]) Bob++;
    //else neither Bob or Alice get a point
 }

return Alice + ' ' + Bob;
}


console.log(comparethetriplets(a,b));

/** If you get an error
 * 
 * Replace this:
 * 
 * const result = compareTriplets(a, b);

    ws.write(result.join('') + '\n');

 * TypeError: result.join is not a function
 * 
 * with this:
 * let result = compareTriplets(a, b);

    ws.write(result += "\n");;
 * 
 * 
 * **/