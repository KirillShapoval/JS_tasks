function searhAnagrams(anagrams) {
  var obj = {};
  var resultOfAnagrams = [];

  for (var i = 0; i< anagrams.length; i++) {
    var newAnagrams = anagrams[i].split("").sort().join("");
    obj[newAnagrams] = anagrams[i];
  }

  for (var key in obj) {
    resultOfAnagrams.push(obj[key]);
  }

    return resultOfAnagrams;

}

var anagrams = ["ратификация", "тарификация", "старорежимность",
 "нерасторжимость", "лепесток", "телескоп"];

var testSearhAnagrams = searhAnagrams(anagrams);
console.log(testSearhAnagrams);