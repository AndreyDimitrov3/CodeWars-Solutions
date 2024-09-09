function findMultiples(integer, limit) {
  let arr = [];
  let sum = 0
    for(i = 1; i < Math.floor(limit / integer); i++){
      if(arr.length === 0){
        arr.push(integer)
      }
      sum += integer;
      arr.push(sum + integer)
    }
  if(arr.length === 0){
    arr.push(integer)
    return arr;
  } else{
    return arr; 
  }
}
