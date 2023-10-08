/////////////////////////////////////////////


//stack (primitive), Heap(Non - Primitive)
let myYoutubename = "lifestuffs"

let anothername = myYoutubename
console.log(anothername);

let user  = {
    email:"user@google.com",
    upi:"user@ybl"
}


let usertwo =  user;
usertwo.email = "vaishur@gmail.com"

console.log(user.email);
console.log(usertwo.email);