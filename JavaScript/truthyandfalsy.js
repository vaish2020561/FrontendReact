const userEmail = ""

if (userEmail) {
    console.log("got user Email");
}else {
    console.log("Don't have user email ");
}

//falsy values = false , 0 , -0 , bigint 0n , "", NaN , null , undefined 

// truthy values = 
// "0" ,"false", " ",[],{},function(),

if(userEmail.length == 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0 ){
    console.log("object is empty ");
}

//Nullish Colasing opertor (??): null defined

let val1;
val1 = 5 ?? 10
val2 = null ?? 10
var1 = undefined ?? 15

var2 = null ?? 10 ?? 15


console.log(val1);
console.log(val2);
console.log(var1);
console.log(var2);


// terniary  Operator

// condtion ? true : false

const tea = 1000

tea >= 800 ? console.log("less than 8000") : console.log("greater than 10000");