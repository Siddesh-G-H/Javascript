const myArr = ["siddesh", true, 5.67, 56]
const num = [0, 1, 2, 3, 4, 5]

// 0 -based indexing

//NOTE:- **IMP** 
// Copy of Array is Shallow type Means points to same References
// Arrays have Prototype

//Array Methods

// console.log(num.push(6)); // same as append and return length of num after appending
// console.log(num); 
// console.log(num.pop()); // return poped ele


// console.log(num.unshift(9)); // insert at index 0 and shift all elements and removes last element 
// // Unshift does not return ele added but it returns length
// console.log(num.shift()); // same as pop but remove and return ele at index 0
// console.log(num);

// console.log(num.includes(4)); // Same as contains or in returns boolean
// console.log(num.indexOf(8)); // returns index of ele, if not present then returns -1

// const newArr = num.join("/") // same as in py but default parameter is ',' but in py ' ' and
// //  returns string
// console.log(newArr);

// **************IMP*************
// Slice and Splice

// console.log(num);
// const numslice = num.slice(2, 4) // returns a deep copy and does not modify original array
// // including start and excluding end as py
// console.log(numslice);

// console.log(num);


// const numsplice = num.splice(2, 4)
// // including start and including end and modify original array it removes that part of array
// // and 4 is number of elements that we want from index 2

// console.log(numsplice);

// console.log(num);

// console.log(num.push(myArr));// modify original array and add new array as single ele and return len

// console.log(num); 

// console.log(num.concat(myArr)); // by this we can add only one array

// Therefore we have spread which add each ele of each array in single as shown below

// const allArr = [...myArr, ...num] // we can even add more arrays

// console.log(allArr);

// const subArrays = [1, 2, 4, 5, [1, 3, 4, 6, 7], 7, 8, [5, 3, 1, [ 7, 8, 9, 0]]]

// console.log(subArrays.flat(Infinity)); // returns single array with all ele in subarrays

// console.log(Array.isArray("Siddesh"));
// console.log(Array.from("Siddesh")); // converts object,string to array same as py
// console.log(Array.from(23143434)); // in case of numbers it returns empty array because it is not anle to convert
// console.log(Array.from({name: "Siddesh"})); // here we have to specify keys or values

console.log(Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)); // takes any number of arguments and treat as ele


