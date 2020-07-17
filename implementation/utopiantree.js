let n = 4;

const utopiantree = (h, n) => {
  for (let i = 0; i <= n - 1; i++) {
    if (i % 2 == 0) {
      h = h * 2;
     
    } else if (i % 2 != 0) {

        h = h + 1;
        
    }
    
  }

  return h;
};
//console.log(n);
console.log(utopiantree(1, 10));
