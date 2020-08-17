//You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

//Therefore you need a method, which returns the smallest unused ID for your next new data item...

function nextId(ids){
  for (i = 0; i < ids.length; i++) {
    if (ids.indexOf(i) == -1){
      return i;
    }
  }
  return ids.length;
}
