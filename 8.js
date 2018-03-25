function calcRentalCarCost(days) {
  var amount = 0;
  if (days < 3) {
    amount = days * 40;
  } else if (days < 7) {
    amount = days * 40 - 20;
  } else if (days >= 7) {
    amount = days * 40 - 50;
  }
  return "Цена проката: " + amount + "$";
}

calcRentalCarCost(2);
calcRentalCarCost(5);
calcRentalCarCost(9);

var testAmount = calcRentalCarCost(10);
console.log(testAmount);
