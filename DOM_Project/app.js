/* QUESTION 3:Add a button element into the dom with a onclick event listener, which when clicked diSplays
a pop up modal with the following text: */

document.getElementById("popup-btn").addEventListener("click", function(){
	document.getElementById("modal-area").style.display = "flex";
})

document.querySelector(".modal-close").addEventListener('click', function(){
	document.getElementById("modal-area").style.display = "none";
})

/* QUESTION 2:Using document.style.
- Set the background Color of the section with id main to Blue,
- padding to 0px
- margin to 0px
- display flex */

// Selecting Element

var lux = document.getElementById("main");

// Applying styles on element

lux.style.backgroundColor = "blue";
lux.style.padding = "0px";
lux.style.margin = "40px";
lux.style.display = "flex";