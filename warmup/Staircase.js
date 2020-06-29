let n = 16;

function staircase(n) {

    for (let i = 0; i <= n ; i++) {
        console.log(" ".repeat(n - i) + "#".repeat(i));
}

}

console.log(staircase(n));