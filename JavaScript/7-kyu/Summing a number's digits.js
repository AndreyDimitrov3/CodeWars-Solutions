function sumDigits(number) {
  let nuberDigit = Math.abs(number);
  let stringArr = nuberDigit.toString().split('');
  let numberArr = stringArr.map(Number);
  let sum = 0;
  for(let i = 0; i < numberArr.length; i++){
    sum += numberArr[i];
  }
  return sum;
}
