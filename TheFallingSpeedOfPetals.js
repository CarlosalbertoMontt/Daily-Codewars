//Write a function that receives the speed (in cm/s) of a petal as input,
//and returns the time it takes for that petal to reach the ground from the same branch.

function sakuraFall(v) {
  let distanceToGround = 5 * 80; // distance from branch to ground = 400 centimeters
  let time = 0;

  if(v > 0){
    time = distanceToGround / v;
}
return time;
}
