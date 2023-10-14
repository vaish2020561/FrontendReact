function saymyname() {
    console.log("vaishu");
}

saymyname();

// function addTwoNumbers(number1, number2) {
//    console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
   return number1 + number2;   // return ke baad kuch print nhi hota h
 }

const result = addTwoNumbers(3,4);

console.log("result: ", result);

function loginUser(username) {
    return `${username} just logged in `
}

console.log(loginUser("hitesh"));
console.log(loginUser());






// when you pass some string it will give string when you pass empty string then it will not print username but when you dont pass anything it will return undefined 


function calculatePrice(val1,val2, ...num1) {
    return num1 ;
}

console.log(calculatePrice(200,300,400,500));

const user = {
    username: "hitesh",
    price: 199

}
function handleObject(anyobject) {
    console.log(`Username  ${anyobject.username} amd price is ${anyobject.price}`);
    {anyobject.price};
}
handleObject(user);

const myNewarray = [200,300,400,];

function secondValue(getArray) {
    return getArray[1];
}

console.log(secondValue(myNewarray));