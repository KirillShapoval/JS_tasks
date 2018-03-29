function digitize(n) {
  var str = n + "";
  str = str.split("").reverse();

  for (i = 0; i < str.length; i++) {
    str[i] = +str[i];
  }
  return str;
}

str = 348597;

digitize(str);

var checkDigitize = digitize(str);
console.log(checkDigitize);
