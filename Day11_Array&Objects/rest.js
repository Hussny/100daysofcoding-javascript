const alphabet = ["A", "B", "C", "D", "E", "F"];

// The three dots ... is used display the other arrays
const [a,b,c, ...rest] = alphabet;

console.log(a);
console.log(b);
console.log(c);
console.log(rest);

