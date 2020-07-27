let person = {
  firstName: "John",
  lastName: "Liam",
  age: 25,
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
person.firstName; // returns John
person.lastName; // returns Liam
person["firstName"]; // returns John
person["lastName"]; // returns Liam
person.getFullName();
