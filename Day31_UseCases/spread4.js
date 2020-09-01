// concatenate arrays

var arr1 = [0, 1, 2];
var arr2 = [3, "me"];

// arr1.concat(arr2);

arr1 = [...arr1, ...arr2];

console.log(arr1);