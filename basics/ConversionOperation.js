let num = "23abc"

// console.log(typeof num);
// console.log(typeof(num));

let val = Number(num)

// console.log(typeof val);
// console.log(typeof(val));

//console.log(val);// NaN is Not a Number is a value of class Number Therefore always check if a variable is not NaN
let b = 33
let res = String(b)
console.log(res);

console.log(typeof res);

/* Type Casting:
       To Number:
           null => 0
           String => NaN // Not convertable strings only ex: Siddesh 
           undefined => NaN
           true/false => 1/0 respectively
        To Boolean:
            null => false
            string("") => false; string("VVGJG") => true
            undefined => false
            0 => false; 1 => true
        To String:
            null => "null"
            undefined => "undefined"
            true/false => "true"/"false" respectively
            33 => "33"
*/
