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

console.log(userOne.name); */

// UPDATING PROPERTIES

// userOne.name = "Salat"; 


// CLASS CONSTRUCTORS
/*
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
*/
// CLASS METHODS
/*
class User{
constructor(email, name){
    this.email = email;
    this.name = name;
}
login(){
    console.log(this.email, "just logged in");
}
logout(){
    console.log(this.email, "just logged out");
}
}

var userOne = new User("abc@gmail.com", "abd");
var userTwo = new User("xyz@gail.com", "xyz");

userOne.login();
userTwo.logout();
*/

// METHOD CHAINING 

class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, "just logged in");
    }
    logout(){
        console.log(this.email, "just logged out");
    }
    updateScore(){
        this.score++;
        console.log(this.email, "score is now", this.score);

    }
    }
    
    var userOne = new User("abc@gmail.com", "abd");
    var userTwo = new User("xyz@gail.com", "xyz");
    
    userOne.login();
    userTwo.logout();