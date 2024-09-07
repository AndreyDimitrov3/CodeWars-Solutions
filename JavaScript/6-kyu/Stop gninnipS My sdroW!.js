function spinWords(string){
  let newArr = [];
  let stringArr = string.split(' ');
  
  for(i = 0; i < stringArr.length; i++){
    if(stringArr[i].length >= 5){
       newArr.push(stringArr[i].split('').reverse().join(''));
    } else{
      newArr.push(stringArr[i]);
    }
  }
  return newArr.join(' ');
}
