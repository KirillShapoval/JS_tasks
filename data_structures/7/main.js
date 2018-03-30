function sortByLength(array) {

  function compareNumeric(a, b) {
    return a.length - b.length;
  }

  return array.sort(compareNumeric)
}

var arr =  ["Telescopes", "Yes", "Glasses", "No", "Eyes", "Monocles"];

sortByLength(arr);

var checkSortByLength = sortByLength(arr);
console.log(checkSortByLength);
