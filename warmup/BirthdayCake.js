let ar = [18, 90, 90, 13, 90, 7,5, 90, 8, 90, 43];
let n = 10;
let can = 0;

function birthdayCake(ar) {
    
    let max = Math.max(...ar);
    console.log(max);

    for (let i = 0; i <= n; i++) {
        
        if (max == ar[i]) {
             can++;
        }

       

    }

    return can;

}

console.log(birthdayCake(ar));