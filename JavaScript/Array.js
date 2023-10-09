//   Array

const myArr = [0,1,2,3,4,5];
const myHero = ["A","b","c"];

console.log(myArr[0]);
console.log(myHero[0]);

// Array methods

myArr.push(6);
myArr.push(7,8);
myArr.pop()

myArr.unshift(0);
myArr.shift(0);

console.log(myArr.includes(8));
console.log(myArr.indexOf(8));

const newArr = myArr.join();


console.log(myArr);
console.log(typeof  newArr);

// Slice and splice 

console.log("A", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3);
console.log("C",myArr);
console.log(myn2);

const marvelHeros = ["thor", "ironman" , "Spiderman"];
const dchero = ["A","ghjk", "hfjkl"];

const allhero = console.log(marvelHeros.concat(dchero));
console.log(allhero);

const allnewhero = [...marvelHeros,...dchero];
console.log(allnewhero);

const anotherarray1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realarray1 = anotherarray1.flat(Infinity);
console.log(realarray1);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "hitesh"}));
  // intresting case  keys se array banao

  let score1 = 100 ;
  let score2 = 200 ;
  let score3 = 300 ;

  console.log(Array.of(score1,score2,score3));