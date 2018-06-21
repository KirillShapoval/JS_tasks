function transformStr(str) {
  var arr = str.split("");
  var obj = {};

  arr.forEach(elem => {
    var value = obj[elem];

    if (!value) {
      obj[elem] = 1;
      return;
    }

    obj[elem] = value + 1;
  });

  var newStr = '';

  for (var key in obj) {

    if (obj[key] === 1) {
     newStr += key;
    }

    else newStr += key + obj[key];
  }

  return newStr;
}

var str = "aaabbccccd";

var testTransformStr = transformStr(str);
console.log(testTransformStr);
