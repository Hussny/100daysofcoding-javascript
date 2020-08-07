function makeFunc(){
    var name = "lakers";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();