//Given an array of ints, return the index such that the sum of the elements to the right of that index equals the sum of the elements to the left of that index.
//If there is no such index, return -1. If there is more than one such index, return the left-most index.


function peak(arr){
  for(var i=0,l=0,r=arr.reduce((a,b)=>a+b,0);i<arr.length;i++){
    r-=arr[i]
    if(l==r) return i
    l+=arr[i]
  }
  return -1
}
