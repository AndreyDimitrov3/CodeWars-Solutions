function solution(str, ending){
  if(ending.length === 0) return true;
  let endingLength = ending.length;
  
  if(str.slice(-endingLength) === ending){
    return true;
  } else{
    return false;
  }
}
