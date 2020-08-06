var userOne = {
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

userOne.name = "Salat";