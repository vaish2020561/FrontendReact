//Singleton

// object litrals

// dono se object hi banta h

// Object.create

const mySym  = Symbol("key1")

const Jsuser = {
    name: "vaishuu",
    [mySym]: "mykey1",
    age: 22,
    location: "kanpur",
    email: "vaishuridhu@gmailcom",
    isLoggedIn: false,
    lastLoginDays : ["Monday","saturdays"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);

console.log(typeof Jsuser[mySym]);

Jsuser.email = "hitesh@google.com"
// Object.freeze(Jsuser);
Jsuser.email = "hitesh@microsft.com"
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello js user");
}


Jsuser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());


const  tinderUser = new Object();

// const tinderuser1 = {};

tinderUser.id = "123ac";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularuser   = {
    email : "soe@gmail.com",
    fullname: {
        userFullname :{
            firstName : "vaishnavi",
            lastName :  " bharti"
        }
    }
}

console.log(regularuser.fullname.userFullname.firstName);

const obj1  = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4:"b"
}
const obj4  = {
    5: "a",
    6: "b"
}

const obj5 = {
    7: "a",
    8: "b"
}
// const obj3  = {obj1,obj2};
const obj3 = Object.assign({},obj1,obj2,obj4,obj5);  // add parentheses or empty array so that guranted  object assign ho jayega
console.log(obj3);


const obj8 = { ...obj1,...obj2,...obj4,...obj5};
console.log(obj8);

const users = [
    {
        id: 1,
        email:"h@gmail.com"
    }
    ,
    {
        ...obj1
    }
    ,
    {
        ...obj2
    }
]
users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const  course = {
    coursename : "js in hindi",
    price : "999",
    courseInstrutor: "hitesh"
}

// course.courseInstrutor

const {courseInstrutor: instructor} = course  //destructure

console.log(instructor);

// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")

//////// API concept///////

// {
//     name : "hitesh",
//     coursename1 : "js in hindi",
//     "price":"free"

// }
    