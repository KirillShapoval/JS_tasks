function checkBMI(weight, height)  {
  var bmi = weight/(height*height);

  if (bmi <= 18.5) {
  console.log("Underweight");
  } else if (bmi <= 25.0) {
  console.log("Normal");
  } else if (bmi <= 30.0) {
  console.log("Overweight");
  } else {
  console.log("Obese");
  }
}
checkBMI(75, 1.79);
checkBMI(150, 1.8);
