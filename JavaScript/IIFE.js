// Immediately invoked function expressions
//jo function Immediately execute ho jaye ,global scope ke pollution se problem hiti to usko hatane ke liye use hota h IIfe


(function chai() {

    // named IIFE
    console.log(`DB connected`);
})();

( (name) =>   {
    //simple unnamed IIFE
    console.log(`DBconnectd ${name}`);
}

)('hitesh') //parameter pass krne hote h


///Javascript execution context 
// javascript kisi bhi code ko do phase mei run krti h 

// global execution context refers to this - ye higa hi value ho ya nhi 
//javascript is single threaded h
// Function execution context - 
//Eval execution context- 
// {
    // hbdk  (memory creation phase)
    //   execution phase
// } 


//example
let val1 = 10 ;
let val2 = 2;
function addnum(num1,num2) {
    let total = num1 + num2;
    return total;
}

let result = addnum(val1,val2)
let result2 = addnum(10,3);

// 1 . global execution phase - this
// 2 . memory phase -  val1 ->undefine
//                  -  val1 -> undefined
//                  -  addnum -> definetion
//                  -  result -> undefined
//                  -   result2 -> undefined
//3. execution phase-  val1 -> 10
//                  -  val2 -> 5
//                  - addnum ->

// new variable environment + execution thread ()  it will delete also

//memory phase -  val1 ->undefined        execution context - num1 -> 10
//             -  val2 -> undefined                         - num2 -> 5
//             - total -> undefined                         - total -> 15


// new variable environment + execution thread ()  it will delete also


//memory phase -  val1 ->undefined        execution context - num1 -> 10
//             -  val2 -> undefined                         - num2 -> 5
//             - total -> undefined                         - total -> 15

// execution mei values change hogi

