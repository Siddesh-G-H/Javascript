let mydate = new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());

const newDate = new Date(2025, 2, 14)
// console.log(newDate.toString());

const DateStamp = Date.now() // returns Time in milisec from 1 jan 1970

// To convert Time in sec 
const DateStampSec = Math.floor(Date.now()/1000)

// console.log(DateStampSec);

//defining the required format

const myDate = new Date()

const formatedDate = myDate.getDate()
const formatedDay = myDate.getDay()
const formatedTime = myDate.getTime()

// mydate.toLocaleString('Default', {
//     dateStyle: "full",
//     weekday: "long",
//     day: "numeric"
// })

console.log(myDate);
console.log(formatedDate);
console.log(formatedDay);
console.log(formatedTime);
//console.log(myformatedTime);








