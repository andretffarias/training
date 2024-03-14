"use strict";

var average = function average() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }
  var sum = parameters.reduce(function (accum, num) {
    return accum + num;
  }, 0);
  return sum / parameters.length;
};

//console.log(average([7, 2, 9, 5, 3, 1, 7]))

var weightedAverage = function weightedAverage() {
  for (var _len2 = arguments.length, parameters = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    parameters[_key2] = arguments[_key2];
  }
  var sum = parameters.reduce(function (accum, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accum + number * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  var weightSum = parameters.reduce(function (accum, parameters) {
    var _parameters$weight;
    return accum + ((_parameters$weight = parameters.weight) !== null && _parameters$weight !== void 0 ? _parameters$weight : 1);
  }, 0);
  return sum / weightSum;
};
console.log("M\xE9dia Ponderada: ".concat(weightedAverage({
  number: 9,
  weight: 3
}, {
  number: 7
}, {
  number: 10
})));
var median = function median() {
  for (var _len3 = arguments.length, parameters = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    parameters[_key3] = arguments[_key3];
  }
  var array = [].concat(parameters).sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    var num1 = array[middle - 1];
    var num2 = array[middle];
    return (num1 + num2) / 2;
  } else {
    return array[middle];
  }
};

//console.log(median([7, 2, 9, 5, 3, 1, 7]))

var mode = function mode() {
  for (var _len4 = arguments.length, parameters = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    parameters[_key4] = arguments[_key4];
  }
  var quantities = parameters.map(function (num) {
    return [num, parameters.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log("Moda: ".concat(mode(1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));
