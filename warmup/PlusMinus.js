let arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {

    const lengtharr = arr.length;

    let contzeros = 0;

    let contneg = 0;

    let contpos = 0;

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < 0) {
            contneg++;
        } else if (arr[i] == 0) {
            contzeros++;
        } else if (arr[i] > 0) {
            contpos++;
        }
    }

    let neg = contneg / lengtharr;

    let roundedneg = neg.toPrecision(6);

    let zeros = contzeros / lengtharr;

    let roundedzeros = zeros.toPrecision(6);

    let pos = contpos / lengtharr;

    let roundedpos = pos.toPrecision(6);

    console.log(roundedpos);
    console.log(roundedneg);
    console.log(roundedzeros);
}

console.log(plusMinus(arr));