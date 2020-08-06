/*var userOne = {
    email : "husseinsalat24@gmail.com",
    name: "Hussein",
    login(){
        console.log(this.email, "has logged in");
    },
    logout(){
        console.log(this.email, "has logged out");
    }
};

console.log(userOne.name);

// UPDATING PROPERTIES

userOne.name = "Salat"; */

// CLASS CONSTRUCTORS

class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
}

var userOne = new User("abc@gmail.com", "abd");
var userTwo = new User("xyz@gail.com", "xyz");

console.log(userOne);
console.log(userTwo);

// the 'new' keyword
// - creates a new empty object{}