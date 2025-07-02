//singleton comes when objects created with constructor
//Object.create() like this

// Object literals donot have singletons

// JS objects are same as py Dictionaries

// const mySym = Symbol("Key1")

// const User = {
//     name: "Siddesh", // self considered name as string
//     age: 18,
//     email: "Siddesh@google.com",
//     [mySym]: "SymbolKey",
//     mySym: "StringKey",
//     "full name": "Siddesh Gowda",// value can be array,object,anything
//     IsLoggedIN: false,
//     LastAcces: ["Monday", "Sunday"]
// }
// Accessing val in object has two approach one is by operatpr [], another is by '.' operator

//but best is []
// console.log(User[mySym]);
// console.log(typeof User[mySym]);
// console.log(User["full name"]);
// console.log(User.LastAcces);

// Objects are mutable 
// console.log(User);
// User.IsLoggedIN = true
// // but to stop updating
// Object.freeze(User)

// User["full name"] = "Siddesh"

// console.log(User);


// User.greeting = function(){
//     console.log("HELLO JS USER");
// }

// User.greeting2 = function(){
//     console.log(`Hello ${this.name} Welcome to JS`);
// }

// console.log(User.greeting());
// console.log(User.greeting2());

//**************************************OBJECTS BY CONSTRUCTORS***************************************

// const InstaUser = new Object()
// const InstaUser2 = {}

// console.log(InstaUser);
// console.log(InstaUser2);

// commonly we use '.' operator to access object 

// const regUser = {
//     email: "Siddesh@Microsoft.com",
//     fullname: {
//         Username: {
//             firstname: "Siddesh",
//             lastname: "Gowda"
//         }
//     }
// }

// console.log(regUser.fullname.Username.firstname);

// //optional chaining

// console.log(regUser.fullname?.Username.firstname);

// const obj1 = {1: 'a', 2: 'b', 3: 'c'}
// const obj2 = {4: 'd', 5: 'e', 6: 'f'}

// Concatinating 

// const obj3 = Object.assign({}, obj1, obj2) // here {} is target dict and obj1,obj2 are sources
// const obj3 = Object.assign(obj1, obj2) // here obj1 is target and all other are sources

// const obj3 = {...obj1, ...obj2} // Spreading

// console.log(obj3);

// Some Methods

// console.log(Object.keys(User));
// console.log(Object.values(User));
// console.log(Object.entries(User)); // same as py dict.items but each key,val pair will be an array

// To check if a key is present or not
// console.log(User.hasOwnProperty('time'));

// const Course = {
//     email: "Siddesh@gmail.com",
//     phNO: "6362786890",
//     price: "999",
//     courseInstructor: "Siddesh"
// }

// To access Course Instructoe we can use
//console.log(Course.courseInstructor);

// Or

// const {courseInstructor} = Course

// console.log(courseInstructor); // Accessed by creating it as a seperate object

// Or

// const {courseInstructor: Instructor}  = Course // it tells courseInstructor as Instructor

// console.log(Instructor);

// {
//     "name":"Gagan",
//     "age": "25",            // Json is similar to object which is recived from bsckend server
//     "Cgpa": "8.55",         // During API call
// }
 //OR JSON can be array of objects