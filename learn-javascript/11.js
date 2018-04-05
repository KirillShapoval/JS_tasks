function getAngle (angle_1, angle_2) {
  var angle_3;

  if ((angle_1 > 0) && (angle_2 > 0) && (angle_1 % 1 == 0) && (angle_2 % 1 == 0)) {
  angle_3 = 180-angle_1-angle_2;
  console.log ("Значение 3го угла: " + angle_3 + " град");
  } else {console.log ("Error!");}
}
   getAngle (50, 70);
   getAngle (37, 68);
   getAngle (-77, 52);
   getAngle (34.00, 52);
   getAngle (34.01, 52);