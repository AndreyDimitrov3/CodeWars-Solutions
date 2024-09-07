function isPangram(string){
  let alp = 'abcdefghijklmnopqrstuvwxyz'.split("");
  let stringArr = string.toLowerCase().split('');
  if(alp.every(x => stringArr.includes(x))) {
    return true;
  } else{
    return false; 
  }
}
