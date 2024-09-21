// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.
// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"
// Don't forget to rate this kata! Thanks :)

String.prototype.camelCase=function(){
  let stringArr = this.split('');
  let newArr = [];
  
  for(let i = 0; i < stringArr.length; i++) {
    if(i === 0){
      newArr.push(stringArr[i].toUpperCase());
    } else if(stringArr[i] === ' '){
      newArr.push(stringArr[i + 1].toUpperCase());
      i += 1;
    } else{
      newArr.push(stringArr[i]);
    }
  }
  return newArr.join('');
}
