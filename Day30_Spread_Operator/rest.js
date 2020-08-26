function f(a,b, ...args) {
    console.log(args); // the rest parameter (...) collects the arguments 3,4,5 into an array
}
f(1,2,3,4,5);