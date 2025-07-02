// let a = 9 // local / block
// const b = 10 // local / block
// var c = 50 // global

// fun() // can be called before

// function fun(){
//     let website = "siddesh.com"
//     function fun2(){
//         console.log(website);
//         const name = "Basu"
//     }
//     fun2()
//     //console.log(name); not accessable
// }

// //console.log(fun3()) // not accessable before initilization

// const fun3 = function addOne(n1){
//     return n1+1
// }

// console.log(fun3(56));



//***************************** This and Array functions ************************************************

// const user = {
//     username: "Siddesh",
    
//     welcomeUser: function (){
//         console.log(`${this.username} , Welcome to Our Website`);// here this regfers to object only 
//         console.log(this);
        
//     }

// }

// user.welcomeUser()
// user.username = "Vaibhav"
// user.welcomeUser()
// console.log(this); refers to empty object in global context

// function thischeck(){
//     let username = "Nagaraju"
//     console.log(this.username); // we cannot access variables through this keyword
// }
// thischeck()

// function thischeck(){
//     let username = "Nagaraju"
//     console.log(this); // we cannot access variables through this keyword but it has some inbuilt object
// }

// thischeck()

// const fun = () => {
//     let username = "Nagaraju"
//     console.log(this); // here we get empty object and we cannot access variables through this keyword 
// }

// fun()

//aam Zindagi

// const addTwo = (num1,num2) => {
//     return num1 + num2 // explicit return
// }

// console.log(addTwo(5, 8));

//Mentos Zindagi

// const addTwo = (n1,n2) => (n1 + n2) // implicit return bsically  a short function

// console.log(addTwo(56,89));


// ******************************** IIFE ***************************************
// Immediately Invoked FUNCTION EXPRESSION

// syntax = ()(); first () = function, sec () = calling, No auto ';'

(function connect(){
    console.log("DB Connected"); 
})();

((name) => {
    console.log(`${name}, DB2 Connected`);
})("Basu");



