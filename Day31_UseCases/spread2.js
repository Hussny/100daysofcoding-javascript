// Passing elements of an array as arguments to a function

function addtwonumbers(a,b){
    console.log(a+b);
}
var args = [0,1];
addtwonumbers(...args);