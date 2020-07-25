// The Lakers: Closures

function makeFunc() {
  var name = "The Lakers";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
