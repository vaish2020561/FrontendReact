//if

const isUserLoggedIn = true;
const temprature = 41;

if (temprature == 50) {
  // comparision lrne padhte h
  console.log("less than 50");
} else {
  console.log("temperarure is  50");
}
// <,> .>=,<=,== , ===, !=, !==

const score = 200;
if (score > 100) {
  let power = "fly";
  console.log(`user power : ${power}`);
}

// console.log(`user power : ${power}`);
const balance = 1000;

if (balance > 500) console.log("test"); // implicit scope- maan liya h

// nesting
if (balance < 500) {
  console.log(" less than ");
} else if (balance < 750) {
  console.log("less than 750");
} else {
  console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInEmail =  true
const LoggedIngoogle = true

if(userLoggedIn && debitCard ){
    console.log("Allow to buy course");
}

if (LoggedIngoogle || loggedInEmail) {
    console.log("user Logged in");
}