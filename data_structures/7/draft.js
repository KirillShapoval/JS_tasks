var arr =  ["Telescopes", "Yes", "Glasses", "Eyes", "Monocles"];

// function sortByLength(array) {
//   var nameLengths = array.map(function(name) {
//     return name.length;
//   });
//
//   return nameLengths;
// }
//
// sortByLength(arr);
//
// var checkLength = sortByLength(arr)
// console.log(checkLength);

//Подсмотрел функцию на learn.javascript.ru ))
function compareNumeric(a, b) {
  if (a.lentgh > b.lentgh) return 1;
   if (a.lentgh < b.lentgh) return -1;
  // return a.length - b.length;
}

arr.sort(compareNumeric);
console.log(arr);




// var checkArr = sortByLength(arr);
// console.log(checkArr);
