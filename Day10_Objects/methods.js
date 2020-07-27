let user = {
  name: "salat",
  age: "24",
  email: "husseinsalat24@gmail.com",
  location: "nairobi",
  blogs: ["tears the innocent", "moment of life"],
  login: function () {
    console.log("The User has logged in");
  },
  logout: function(){
    console.log("The User has logged out");
  }

};

user.login();
user.logout();
