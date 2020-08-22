const ul = document.getElementById("authors"); // Get the list where we will place our authors
const url = "https://randomuser.me/api/?results=10"; // Get 10 random users

// The data we are going to send in our request
let data = {
    name: 'Sara'
}
// The parameters we are gonna pass to the fetch function
let fetchData = { 
    method: 'POST', 
    body: data,
    headers: new Headers()
}
fetch(url, fetchData)
.then(function() {
    // Handle response you get from the server
});
fetch(url)
  // Here you get the data to modify as you please
  .then((resp) => resp.json())
  .then(function (data) {
    let authors = data.results;
    return authors.map(function (author) {
      let li = createNode("li"),
        img = createNode("img"),
        span = createNode("span");
      img.src = author.picture.medium;
      span.innerHTML = `${author.name.first} ${author.name.last}`;
      append(li, img);
      append(li, span);
      append(ul, li);
    });
  })
  .then(function (data) {
    let authors = data.results; // Get the results
    return authors.map(function (author) {
      // Map through the results and for each run the code below
      let li = createNode("li"), //  Create the elements we need
        img = createNode("img"),
        span = createNode("span");
      img.src = author.picture.medium; // Add the source of the image to be the src of the img element
      span.innerHTML = `${author.name.first} ${author.name.last}`; // Make the HTML of our span to be the first and last name of our author
      append(li, img); // Append all our elements
      append(li, span);
      append(ul, li);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

fetch(url)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function (data) {
    // Create and append the li's to the ul
    function createNode(element) {
        return document.createElement(element);
    }
  
    function append(parent, el) {
      return parent.appendChild(el);
    }
  
    const ul = document.getElementById('authors');
    const url = 'https://randomuser.me/api/?results=10';
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      let authors = data.results;
      return authors.map(function(author) {
        let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');
        img.src = author.picture.medium;
        span.innerHTML = `${author.name.first} ${author.name.last}`;
        append(li, img);
        append(li, span);
        append(ul, li);
      })
    })
    .catch(function(error) {
      console.log(error);
    });   
  });


