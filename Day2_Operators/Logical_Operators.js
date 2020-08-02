var a = 5,
  b = 10;
z = a != b && a < b; // returns true
x = a > b || a == b; // returns false
w = a < b || a == b; // returns true
y = !(a < b); // returns false
z = !(a > b); // returns true

console.log(z);
console.log(x);
console.log(w);
console.log(y);
console.log(z);
