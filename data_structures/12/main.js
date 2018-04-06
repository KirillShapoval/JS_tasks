function sortString(str) {
  let arr = str.split(" ");

  function compareNumeric(a, b) {
    let firstNum = a.match(/\d+/)[0];
    let secondNum = b.match(/\d+/)[0];

    return firstNum - secondNum;
  }

  arr.sort(compareNumeric);

  return arr.join(" ");
}

sortString('is2 Thi1s T4est 3a');

let testStr = sortString('is2 Thi1s T4est 3a');
console.log(testStr);
