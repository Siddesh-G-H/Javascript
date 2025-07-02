// for of
// const myArr = [1, 2, 3, 4, 5, 7, 8]
// for (const element of myArr) {
//     console.log(element);
// }

// const obj = {
//     "name": "Siddesh",
//     "age": "45"
// }

// for (const element of obj) {
//     console.log(element);
// }// for of cannot be used for objects




//********************* for-in ****************************************/

// const obj = {
//     "name": "Siddesh",
//     "age": "45"
// }

// for (const key in obj) {
//     console.log(`${key} is ${obj[key]}`);
// }

// const myArr = [1, 2, 3, 4, 5, 7, 8]

// for (const key in myArr) {
//     console.log(myArr[key]); // here key is index therefore array is also is object
// }

// const map = new Map()

// map.set("name", "Siddesh")
// map.set("age", "67")
// map.set("shy", "full")

// console.log(map);

// for (const key in map) {
//     console.log(key);
// }// it does not run on map


/********************************** for-each ******************************/

// const myLang = ["js", "rb", "py", "swift", "cpp", "java"]

// myLang.forEach( function (each) {
//     console.log(each);
// } )

// myLang.forEach( (each) => {
//     console.log(each);
// } )

// function printMe(ele){
//     console.log(ele);
// }

// myLang.forEach(printMe) // only reference should be passed

// myLang.forEach((val) => console.log(val))

// const myCoding = [
//     {
//         codingLang: "JavaScript",
//         file: "js"
//     },
//     {
//         codingLang: "Java",
//         file: "java"
//     },
//     {
//         codingLang: "python",
//         file: "py"
//     }
// ]
// myCoding.forEach((obj) => {
//     console.log(obj.codingLang);
// })  // drawback is it does not return anything means undefined

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const filteredArr = nums.filter( (num) => num >= 5 )

// console.log(filteredArr);

const filteredArr = []

// nums.forEach( (each) => {
//     if(each >= 5){
//         filteredArr.push(each)
//     }
// } )

// console.log(filteredArr);

// BY USING MAP

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = nums.map( (val) => val * 10 )// implicit return
// const newNums = nums.map( (val) => { return val * 10 })// explicit return

// console.log(newNums);

// Chaining of methods

// const newArr = nums
//                 .map( (val) => val + 10 )
//                 .map( (val) => val%10 )
//                 .filter( (val) => val <= 10 )
// // it moves from left to right
// console.log(newArr);

/******************** Array.REduce */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const reducedVal = nums.reduce( function (acc, currval) {
//     console.log(`Acc: ${acc} and CurrVal: ${currval}`);
    
//     return acc + currval
// }, 0)// here 0 is initial val of acc

const reducedVal = nums.reduce( (acc, currval) => acc+currval, 0)
console.log(reducedVal);
