"use strict"; //treat all JS code as newer version 

// alert (3+3) we are using node js not browser 
console.log(3+3);

console.log("vaishu");  // code readability should be high 

let name = "vaishu";
let age = "22" ;
let isLoggedIn = false;
let state;
let country = null ;

//number =>2 to power 53
//binint 
//strinh =>""

//boolean => true/false
//null=> standalone value
// undefined=> value is not assigned
// symbol => unique

console.log(typeof null);
console.log(typeof undefined );


//primitive 
// 7 types : String , Number , Boolean , Null , Undefined, Symbol ,BIGint

const score1 = 100 ; // Number defined
const score2 = 100.2; // decimal 
const isLoggedIn1 = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 344477893n;

//Refrence or non - primitive 
//Arrays, objects, Functions

const heros = ["hanuman","krishna","mahadev"];
let myObj = {
    name:"Vaishnavi",
    age:22,
}

const myFunction = function() {
    console.log("hello audii");
}

console.log(typeof anotherId );