let x = 1;
let y = 2;
let z = 3;

function catAndMouse(x, y, z) {

    let distCatA = Math.abs(x - z);
    let distCatB = Math.abs(y - z);
    
     if (Math.abs(x - z) === Math.abs(y - z))  {
    
      return "Mouse C";  
    
     } else if (distCatA > distCatB) {
    
       return "Cat B";
    
      } else {
          return "Cat A"
      }
    
    
    }

    console.log(catAndMouse(x,y,z));

    