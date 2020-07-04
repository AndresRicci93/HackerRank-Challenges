
let keyboards = [3,1];
let drives = [5,2,8];
let b = 10;

function getMoneySpent(keyboards, drives, b) {

    let price = 0;

    keyboards.forEach(keyboard => {
        drives.forEach(drive => {
            if ((keyboard + drive) > price && (keyboard + drive) <= b) price = keyboard + drive});
    });

    return price === 0 ? -1 : price;
}

console.log(getMoneySpent(keyboards,drives,b));