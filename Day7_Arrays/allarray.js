var strikers = ["Messi", "Ronaldo", "Cavani", "Lewandoski"];

strikers.push("Suarez"); // Appends new elements to an array, and returns the new length of the array.
console.log(strikers);             
console.log(strikers.pop()); // Removes the last element from an array and returns it.
console.log(strikers);

var wingers = ["Di Maria", "Mbappe"];
console.log(wingers.concat(strikers)); // Combines two or more arrays.

console.log(strikers.join('||'));  // Adds all the elements of an array separated by the specified separator string.

console.log(strikers.reverse());  // reverses the element in an array                   
console.log(strikers);

console.log(strikers.shift());  // removes first element from an array and returns it
console.log(strikers);

console.log(strikers.unshift("Aguero"));  // Inserts new elements at the start of an array.
console.log(strikers);