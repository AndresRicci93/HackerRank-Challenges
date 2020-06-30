let bill = [3,10,2,9];

let k = 1;

let b = 12;


function bonAppetit(bill, k, b) {

    let removed = bill.splice(k, 1);

    const add = (a,b) => a + b;

    let sum = bill.reduce(add);

    const actualcharged = sum / 2;

    let result = b - actualcharged;

    return (b > actualcharged) ? console.log(result) : console.log("Bon Appetit");

}


console.log(bonAppetit(bill,k,b));