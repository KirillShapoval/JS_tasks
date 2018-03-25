function someFunc(callback) {
  var name = "Kerya";
  callback(name);
};

someFunc(function (n) {
return n;
});