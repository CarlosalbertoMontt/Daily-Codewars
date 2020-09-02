
//In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number.


function solve(s){
  return Math.max(...s.match(/\d+/g));
};
