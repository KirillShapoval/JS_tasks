function getMin(list) {
  var min = Infinity;
  for (var i = 0; i < list.length; i++) {
    if (min > list[i]) {
      min = list[i];
    }
  }
  return min;
}

function getMax(list) {
  var max = 0;
  for (var i = 0; i < list.length; i++) {
    if (max < list[i]) {
      max = list[i];
    }
  }
  return max;
}

var arr = [4, 6, 2, -355, 1, 9, 566, 63, -134];

getMax(arr);
getMin(arr);

var testGetMin = getMin(arr);
console.log(testGetMin);

var testGetMax = getMax(arr);
console.log(testGetMax);
