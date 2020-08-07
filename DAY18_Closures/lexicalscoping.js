var number2 = 2;
function addNumbers(number1) {
  console.log(number1 + number2);
}

function addNumbersGenerate() {
  var number2 = 10;
  addNumbers(number2);
}

addNumbersGenerate();

/* it’s 12 for lexically scoped languages.
 This is because first, it looks into an 
 addNumbers function (innermost scope) 
 then it searches inwards, where this 
 function is defined. As it gets the number2
  variable, meaning the output is 12. */