"use strict";

var lista = [1, 3, 5, 7];
lista.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log(x);
});