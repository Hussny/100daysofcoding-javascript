function makeFunc(){
    var name = "lakers";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();

/* A closure is a function having
 access to the parent scope, even 
 after the parent function has closed.*/