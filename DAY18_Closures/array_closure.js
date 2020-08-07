function countTheNumber() {
    var arrToStore = [];
    for (var x = 0; x < 9; x++) {
      arrToStore[x] = function () {
        return x;
      };
    }
    return arrToStore;
  }
  
  const callInnerFunctions = countTheNumber();
  callInnerFunctions[0]() // 9
  callInnerFunctions[1]() // 9