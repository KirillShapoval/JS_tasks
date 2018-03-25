function getEvenOrOdd(even_or_odd)  {
  if (even_or_odd % 2 == 0)
  console.log("Even");
  else if (even_or_odd % 2 == 1)
  console.log("Odd");
  else console.log("Error!");
}

getEvenOrOdd(5);
getEvenOrOdd(8);
getEvenOrOdd(4.6);
getEvenOrOdd("Hi");