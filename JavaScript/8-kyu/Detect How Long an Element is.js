function addLength(str) {
  let strArr = str.split(' ');
  for(i = 0; i < strArr.length; i++){
    strArr[i] = strArr[i] + ' ' + strArr[i].length;
  }
  return strArr;
}
