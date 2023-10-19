// for loop

for (let i = 0; i < 10; i++) {
  const element = i; //block scope

  if (element == 5) {
    console.log("5 is best number");
  }
  console.log(element);
}

for (let i = 1; i <= 10; i++) {
  console.log(`Outer loop : ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop: ${j} and inner loop : ${i}`);
    console.log(i + '*' + j + '=' + i*j);
  }
}

let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
   const element = myArray[index];
   console.log(element);
}

//break and continue

for (let index = 1; index <= 20 ; index++) {
   if (index == 5) {
      console.log(`detected 5`);
      break
   }
  console.log(`value  of i is ${index}`); 
}

for (let index = 1; index <= 20 ; index++) {
   if (index == 5) {
      console.log(`detected 5`);
      continue
   }
  console.log(`value  of i is ${index}`); 
}


// while
 let index = 0
while (index <= 10) {
   console.log(`Value of index is ${index}`);
    index = index + 2;
}

let myArray1 = ["flash", "batman", "superman"];

let arr = 0 
while (arr < myArray1.length) {
   console.log(`value is ${myArray1[arr]}`);
   arr = arr + 1;
}

// do - while 
let score = 1
do {
   console.log(`score is ${score}`);
   score++;
} while (score <= 10);

//////////////////////////Array specific loops//////////////////



// ["","",""]
// [
//    {},{},{}
// ]


//////////////////////// for of//////////////////////
const arr1 = [1,2,3,4,5];

for (const num  of arr1) {
   console.log(num);
}

const greetings = "hello world "

for (const greet  of greetings) {
   console.log(`each char is ${greet}`);
}

// /////////////Maps/////////////////// 

const map =  new Map();

map.set('IN',"India")
map.set('USA',"United states of amarica")
map.set('fr',"France")
map.set('IN',"India")

console.log(map);

for (const [key,value] of map) { //array destructure
   console.log(key ,':-',value);
}

// const myObj = {
//    game1: 'NFS',
//    game2: 'Spiderman'
// }

// for (const [key,value] of myObj) {
//    console.log(key ,':-',value);
// }


/////////forin loop//////
const myObject1 = {
   js : 'javascript',
   cpp: 'C++',
   rb : 'ruby'
}

for (const key in myObject1) {
 console.log(`${key} shortcut for ${myObject1[key]}`);
}

const programming = ["js","rb","cpp"];

for (const key in programming) {
  console.log(programming[key]);
}

const map1 =  new Map();

// map1.set('IN',"India")
// map1.set('USA',"United states of amarica")
// map1.set('fr',"France")
// map1.set('IN',"India")

// for (const key in map) {
//    console.log(key);
// }



///for each//////

const coding = ["js","ruby","cpp","java"]

coding.forEach( (item) => { 
     console.log(item);
})

function printme(item) {
   console.log(item);
}

// coding.forEach(printme())

coding.forEach((item,index,arr) => {
   console.log(item,index,arr);
})


const myCoding = [
   {
      lanaguagename: "Javascript",
      languageFilename:"js"
   },
   {
      lanaguagename: "python",
      languageFilename:"py"
   },
   {
      lanaguagename: "Java",
      languageFilename:"ja"
   },
]

myCoding.forEach((item ) => {
   console.log(item.lanaguagename);
   console.log(item.languageFilename);
})


const mynum = [1,2,3,4,5,6,7]

const newNums = mynum.filter((num) => { num > 4  })
console.log(newNums);

