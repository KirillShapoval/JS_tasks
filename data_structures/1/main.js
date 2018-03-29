20:28 29.03.2018function removeEveryOdd(arr) {
  var oddItems = arr.filter(function(element, i) {
    return (i % 2 === 0);
  });

  return oddItems;
}

var arr = [2, 5, '3', 4, 111, '112', 7, 8, "orange", 10, 11];

removeEveryOdd(arr);

var arrOddItems = removeEveryOdd(arr);
console.log(arrOddItems);