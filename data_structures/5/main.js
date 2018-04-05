function sumDigits(number) {
  var num = number + "";
  num = num.split("");

  if (num[0] === "-") {
    num.shift();
  }

  var sum = 0;

  for (i = 0; i < num.length; i++) {
    num[i] = +num[i];
    sum += num[i];
  }
  return sum;
}

sumDigits(10);  // Returns 1
sumDigits(99);  // Returns 18
sumDigits(-32); // Returns 5

var checkSumDigits = sumDigits(-3674); // Returns 20
console.log(checkSumDigits);
