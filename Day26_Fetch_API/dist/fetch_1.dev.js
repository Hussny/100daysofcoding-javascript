"use strict";

var ul = document.getElementById('authors'); // Get the list where we will place our authors

var url = 'https://randomuser.me/api/?results=10'; // Get 10 random users

fetch(url).then(function (data) {// Here you get the data to modify as you please
})["catch"](function (error) {// If there is any error you will catch them here
});
fetch(url).then(function (resp) {
  return resp.json();
}) // Transform the data into json
.then(function (data) {// Create and append the li's to the ul
});