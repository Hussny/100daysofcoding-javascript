document.getElementById("popup-btn").addEventListener("click", function(){
	document.getElementById("modal-area").style.display = "flex";
})

document.querySelector(".modal-close").addEventListener('click', function(){
	document.getElementById("modal-area").style.display = "none";
})