function playingBanjo(name) {

  var firstSymbol = name[0];

  if (firstSymbol === "R") {
  console.log(name + " plays banjo");
  }
  else if (firstSymbol === "r") {
  console.log(name + " plays banjo");
  }
  else {
  console.log(name + " does not play banjo");
  }
}

playingBanjo("Martin");
playingBanjo("Rikke");
playingBanjo("kirill");