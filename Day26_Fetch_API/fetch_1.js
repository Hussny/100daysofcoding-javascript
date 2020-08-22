const ul = document.getElementById('authors'); // Get the list where we will place our authors
const url = 'https://randomuser.me/api/?results=10'; // Get 10 random users

fetch(url)
  .then(function(data) {
    // Here you get the data to modify as you please
    })
  .catch(function(error) {
    // If there is any error you will catch them here
  });