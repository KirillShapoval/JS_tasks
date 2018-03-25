function getArithmetic(a, b, arithmetic_operator) {

  switch (arithmetic_operator) {
  case 'add':
    arithmetic_operator=+a + +b;
    console.log(arithmetic_operator);
    break;


  case 'subtract':
    arithmetic_operator=a-b;
    console.log(arithmetic_operator);
    break;

  case 'multiply':
    arithmetic_operator=a*b;
    console.log(arithmetic_operator);
    break;

  case 'divide':
    arithmetic_operator=a/b;
    console.log(arithmetic_operator);
    break;

  default:
    console.log("Error!");

  }
}
getArithmetic(5, 2, "add");
getArithmetic(5, 2, "subtract");
getArithmetic(5, 2, "multiply");
getArithmetic(5, 2, "divide");