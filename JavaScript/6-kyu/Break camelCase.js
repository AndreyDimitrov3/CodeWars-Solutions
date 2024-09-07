function solution(string) {
  let arrStr = string.split('');
  let newArr = [];
  for(i = 0; i < string.length; i++){
    if(arrStr[i] == arrStr[i].toUpperCase()){
      newArr.push(' ' + arrStr[i]);
    } else{
      newArr.push(arrStr[i]);
    }
  }
  return newArr.join('');
}
