function arrayDifference(array, filterArray) {
  let arrayDiff = [];
  for (let i = 0; i < array.length; i++) {
    if ( !filterArray.includes(array[i]) ) {
      arrayDiff.push(array[i]);
    }
  }

  return arrayDiff;
}﻿

let array = [1, 2, 2, 2, 3, 9, 7];
let filterArray = [2, 3];

arrayDifference (array, filterArray);

let testArrayDifference = arrayDifference (array, filterArray);
console.log(testArrayDifference);
