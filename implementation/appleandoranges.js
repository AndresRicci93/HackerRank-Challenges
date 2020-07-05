
let s = 7;
let t = 11;
let a = 15;

let oranges = [5,-6];

function countApplesAndOranges(s, t, a, oranges) {
    let naranja = 0;
    
     oranges.forEach((orange) => {
     if (orange + a >= s && orange + a <= t) {
            naranja++
    }
    
});

return naranja;

}
console.log(countApplesAndOranges(s, t, a, oranges));