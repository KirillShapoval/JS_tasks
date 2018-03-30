function sortByLength(array) {

  function compareNumeric(a, b) {
    return a.length - b.length;
  }

  return array.slice().sort(compareNumeric) // slice(), чтобы оставить исходный массив
}

var arr =  ["Telescopes", "Yes", "Glasses", "No", "Eyes", "Monocles"];

sortByLength(arr);

var checkSortByLength = sortByLength(arr);
console.log(checkSortByLength);

console.log(arr);
