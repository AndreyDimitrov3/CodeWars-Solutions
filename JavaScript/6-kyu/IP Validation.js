// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

function isValidIP(str) {
  const strArr = str.split(".");
  if(strArr.length !== 4) return false;
  
  for(let i = 0; i < strArr.length; i++) {
    if(strArr[i] > 255 || strArr[i] < 0) return false;
    if (strArr[i] !== "0" && strArr[i].startsWith("0")) return false;
  }
  return /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.test(str);
}
