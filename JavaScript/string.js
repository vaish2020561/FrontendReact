const name = "Vaishnavi  "
const repoCount = 20
console.log(name + repoCount + " value");

//another method of string interpolation
 console.log(`hello my is ${name} amd my repo count is ${repoCount} `);
const gameName = new String('vaisuu-bharti')

//various functions of string

 console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('v'));

const newString = gameName.substring(0,2);
console.log(newString);

const anotherString = gameName.slice(2,4);
console.log(anotherString);

const newStringone = "     vaishuuuuu      "
console.log(newStringone);
console.log(newStringone.trim());

const url = " https://google.com/google%20"
console.log(url.replace('%20','-'));

console.log(gameName.split("-"));