function countBy(x, n) {
  var z = [];
  var y = 0;
  for (var i = 0; i < n; i++) {
    y += x;
    z.push(y);
  }
  return z;
}

countBy(1, 10); // [1,2,3,4,5,6,7,8,9,10]
countBy(2, 5); // [2,4,6,8,10]﻿

var testZ = countBy(3, 6);
console.log(testZ);
