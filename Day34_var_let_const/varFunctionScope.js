function exampleOne(){
    var scopingWithVariableFunction = "Using inside function"
    console.log(scopingWithVariableFunction);
}

console.log(scopingWithVariableFunction);
// here you get uncaught reference error : not defined

console.log(exampleOne());
// using inside function