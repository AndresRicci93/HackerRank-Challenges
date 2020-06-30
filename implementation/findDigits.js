function findDigits(n) {
    
    const numstr = n.toString().split('');

    let digit = numstr.map(Number); 

    let count = 0;

        for (let i = 0; i < digit.length; i++) {
            if (n % digit[i] === 0) {
                count++;
           }
        }
    return count;
}