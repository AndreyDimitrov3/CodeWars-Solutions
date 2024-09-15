// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
  let strArr = str.split('');
  let newStr = [];
  
  for(let i = 0; i < strArr.length; i++){
    if(strArr[i] === '-' || strArr[i] === '_'){
      newStr.push(strArr[i + 1].toUpperCase());
      strArr.splice(i, 1);
    } else{
      newStr.push(strArr[i]);
    }
  }
  return newStr.join('');
}
