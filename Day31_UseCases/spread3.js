// copy arrays

var defenders = [1, 2, 3];
var centerbacks = [...defenders];   // like defenders.slice()
centerbacks.push(4);

console.log(defenders);
console.log(centerbacks);