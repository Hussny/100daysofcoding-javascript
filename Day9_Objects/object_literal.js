// The object literal is a simple way of creating an object using {} brackets.


let user = {
  name: "salat",
  age: "24",
  email: "husseinsalat24@gmail.com",
  location: "nairobi",
  blogs: ["tears the innocent", "moment of life"],
};
console.log(user);

// Using the dot notation
console.log(user.location);

// Changing a value using the dot notation
user.age = 39;
console.log(user.age);

// Using the Square Bracket [] notation
user['location'] = 'Mombasa';
console.log(user['location']);

// Using typeof operator to show the type
console.log(typeof user);