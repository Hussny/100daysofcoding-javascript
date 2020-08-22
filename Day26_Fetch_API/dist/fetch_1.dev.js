"use strict";

fetch('https://regres.in/api/users') //.then (res => console.log(res))
.then(function (res) {
  return res.json();
}).then(function (res) {
  if (res.ok) {
    console.log('Success');
  } else {
    console.log('Not Successful');
  }
});