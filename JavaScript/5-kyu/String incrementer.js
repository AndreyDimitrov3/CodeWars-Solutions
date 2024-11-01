// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (str) {
  let strPosition = str.search(/(\d+)$/);
  if (strPosition === -1) {
    return str + "1";
  }
  
  let strNumberLength = str.slice(strPosition, str.length).length;
  let strNumber = (Number(str.slice(strPosition, str.length)) + 1).toString();
  let incrementedNumber = strNumber.padStart(strNumberLength, '0');
  
  str = str.slice(0, strPosition) + incrementedNumber;
  return str;
}
