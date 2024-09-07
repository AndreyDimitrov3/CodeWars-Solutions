function solve(s){
  let sArr = s.split('');
  let lowerArr = [];
  let upperArr = [];

  for(i = 0; i < s.length; i++){
    if(sArr[i] === sArr[i].toLowerCase()){
      lowerArr.push(sArr[i]);
    } else{
      upperArr.push(sArr[i]);
    }
  }
  
  if(lowerArr.length >= upperArr.length){
    return s.toLowerCase();
  } else{
    return s.toUpperCase();
  }
}
