
/**************************************************************
 windows onload : tells windows what to do when it is loaded up
 *************************************************************/
window.onload = load();
/****************************
 Selecting / Getting Elements
 ***************************/
function load() {
  let p = document.querySelectorAll(" p")[0]; // obtain all of the <p> elements in the document
  let li = document.getElementsByTagName("li"); // obtain all of the <li> elements in the by tag name
  let clear = document.getElementsByClassName("clear")[0]; // obtain by class name clear which is C

  for (let j = 0; j < li.length; j += 1) {
    if (li[j].innerHTML === "=") {
      li[j].addEventListener("click", calc(j));
    } else {
      li[j].addEventListener("click", value(j));
    }
  }

  /*********************************
 Comparing Operator and evaluating
 *********************************/
  function value(j) {
    return function () {
      if (li[j].innerHTML == "-") {
        p.innerHTML += "-";
      } else if (li[j].innerHTML == "+") {
        p.innerHTML += "+";
      } else if (li[j].innerHTML == "÷") {
        p.innerHTML += "/";
      } else if (li[j].innerHTML == "x") {
        p.innerHTML += "*";
      } else {
        p.innerHTML += li[j].innerHTML;
      }
    };
  }
  /***************
 Clear the screen
 ****************/
  clear.onclick = function () {
    p.innerHTML = "";
  };
  /*******************************
 Evaluate the code and executes it
 ********************************/
  function calc(j) {
    return function () {
      p.innerHTML = eval(p.innerHTML);
    };
  }
}

/*******************************************************
 Check if serviceworker property exists in the navigator
 *******************************************************/
if("serviceworker" in navigator){                                 // navigator is an object in javascript that represents the browser and information about it
  navigator.serviceworker.register("sw.js")                      // register service worker
  .then((reg) => console.log("service worker registered", reg))       /* Promise syntax to deal with asynchronous task*/
  .catch((arr) => console.log("service worker not registered", arr));
}

