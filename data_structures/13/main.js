function reverseWords(str){
  let arr = str.split(" ");
  let newStr= "";

  for (let i = 0; i < arr.length; i++) {
    newStr += arr[i].split("").reverse().join("") + " ";
  }

  return newStr;
}

reverseWords("This is an example!");

var testReverseWords = reverseWords("This is an example!");
console.log(testReverseWords);
