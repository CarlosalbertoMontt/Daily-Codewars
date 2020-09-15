
/*solve ("abbx") = True, because we can convert 'x' to 'a' and get a palindrome.
solve ("abba") = False, because we cannot get a palindrome by changing any character.
solve ("abcba") = True. We can change the middle character.
solve ("aa") = False
solve ("ab") = True*/

function solve(str){
  var count=0;
  if (str.length%2==0)
  {
    for (var i=0; i<str.length/2; ++i)
      if (str[i]!=str[str.length-1-i])
        count++;
    if (count!=1)
      return false;
  }
  else
  {
    for (var i=0; i<(str.length-1)/2; ++i)
      if (str[i]!=str[str.length-1-i])
        count++;
    if (count>1)
      return false;
  }
  return true;
}
