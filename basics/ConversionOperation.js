let num = "23abc"

// console.log(typeof num);
// console.log(typeof(num));

let val = Number(num)

// console.log(typeof val);
// console.log(typeof(val));

//console.log(val);// NaN is Not a Number is a value of class Number Therefore always check if a variable is not NaN
// let b = 33
// let res = String(b)
// console.log(res);

// console.log(typeof res);

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

//***********************OPERATIONS***********************************************

// let value = 3
// let negval = -value
// console.log(negval);

// console.log(2+2);
// console.log(2*2);
// console.log(2-2);
// console.log(2**4);
// console.log(2/2);
// console.log(2%2);

// let str1 = "hello"
// let str2 = " Siddesh"

// let str3 = str1 + str2
// console.log(str3);

// let a = 1 + "2" // concatination
// let b = "1" + 2 // concatination

// console.log("1" + 2 + 2); // concatination from left to right

// console.log(1 + 2 + "3"); // concatination from left to right but first add 1 and 2 therefore output is 33

console.log(+true);

console.log(+"");

let a = b = c = 2
console.log(a,b,c);

b = a++ // value used before incrementing threfore b = 2
c = ++a // value used after incrementing threfore c = 4

console.log(a,b,c);

