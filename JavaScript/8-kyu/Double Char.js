function doubleChar(str) {
  let word = '';
  for(i = 0; i < str.length; i++){
    word = word + str[i] + str[i];
  }
  return word;
}
