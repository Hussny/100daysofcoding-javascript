"use strict";

function f(a, b) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  console.log(args);
}

f(1, 2, 3, 4, 5);