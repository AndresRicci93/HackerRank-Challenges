
let height = [1,6,3,5,2];
let k = 4;

const hurdleRace = (k, height) => Math.max(...height) > k ? Math.max(...height) - k : 0;


    console.log(hurdleRace(k,height));