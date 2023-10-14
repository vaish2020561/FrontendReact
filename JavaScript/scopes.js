 var c = 69;
  let a = 50;
if(true){
    let a = 10 ;
    const b = 20 ; 
    var c = 50 ;
    console.log("inner" , a);
}

// console.log(a);
// console.log(b);
console.log(c);

function one() {
    const username = "vaishu";

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two();

}
one();

if (true) {
    const username = "hitesh "
    if (username === "hitesh ") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);

}
// console.log(username);


// /+++++++++++++++++//////////////////////////



console.log(addon(5));

function addon(num) {
    return num + 1;
}

const addTwo = function (num) {
    return num  + 2;
}
addTwo(5)