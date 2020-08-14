/*You are given 5 variables: sharkDistance = distance the shark needs to cover to eat you in metres, sharkSpeed = how fast it can move in metres/second, pontoonDistance =
how far you need to swim to safety in metres, youSpeed = how fast you can swim in metres/second, dolphin =
a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.*/

If you make it, return "Alive!", if not, return "Shark Bait!".

const shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => {
  let youTime = pontoonDistance / youSpeed
  let sharkTime = sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed)

  return sharkTime < youTime ? 'Shark Bait!' : 'Alive!'
}
