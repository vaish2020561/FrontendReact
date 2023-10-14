const user = {
    username : " hitesh ",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }


}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage();
console.log(this);// browser ke ander jo object h vo h window object

function chai () {
    let username = "hitesh"
    console.log(this.username);
}
chai()

const chai1 =  () => {
    let username = "hitesh"
    console.log(this.username);
}


chai1()


const addTwo = (num1 , num2 ) => {
    return num1 + num2
}
console.log(addTwo(3,4));

///implicit return  (maan leta hu ) //explicit mei return lagana padhta hai 
const addTwo1  = (num1 , num2) => num1 + num2
console.log(addTwo1(3,4))

const addTwo3 = (num1 , num2 ) => ({username:"hitesh"})

console.log(addTwo3())