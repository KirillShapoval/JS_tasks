function arrPositiveSum(array) {
  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum += array[i];
    }
  }
  return sum;
}

var arr = [1, -4, 7, 12, -5, 9, 5, -7];

arrPositiveSum(arr);

var checkSum = arrPositiveSum(arr);
console.log(checkSum);
