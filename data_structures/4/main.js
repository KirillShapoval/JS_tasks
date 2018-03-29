function gimme(inputArray) {
  for (i = 0; i < inputArray.length; i++) {
    if ( (inputArray[1] < inputArray[0] && inputArray[0] < inputArray[2]) ||
         (inputArray[2] < inputArray[0] && inputArray[0] < inputArray[1]) )
      return arr.indexOf(inputArray[0]);
    else if ( (inputArray[0] < inputArray[1] && inputArray[1] < inputArray[2]) ||
              (inputArray[2] < inputArray[1] && inputArray[1] < inputArray[0]) )
      return arr.indexOf(inputArray[1]);
    else
      return arr.indexOf(inputArray[2]);
  }
}

// var arr = [2, 3, 1];
var arr = [5, 10, 14];
// var arr = [8, 14, 13];

gimme(arr);

var checkGimme = gimme(arr);
console.log(checkGimme);
