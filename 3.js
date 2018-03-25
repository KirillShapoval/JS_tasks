function reverse(str) {
  var mass = str.split(" ");
  var newStr = mass.reverse();
  return newStr.join(" ");
}

console.log(reverse("Hi There."));
console.log(reverse("Hello World"));