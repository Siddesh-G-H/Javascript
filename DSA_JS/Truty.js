// const Useremail = []

// if(Useremail){
//     console.log("Got the email"); 
// }else{
//     console.log("didn't get mail");  
// }

// fasly values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy

// "0", 'false', ' ', [], {}, function(){}

//To check array is empty
// const emptyArr = []

// if(emptyArr.length === 0){
//     console.log("Array is empty");
// }

//To check object is empty
const emptyoObj = {}

if(Object.keys(emptyoObj).length === 0){
    console.log("Object is empty");
}

//Nullish Coalising operator(??) for null and undefined

let val = 10 ?? 5

//nut what if any one val is null or undefined then it will take other val

val = null ?? 5

console.log(val);

val = undefined ?? 15 ?? 56

console.log(val);


// Ternary operator

// condn ? true:false