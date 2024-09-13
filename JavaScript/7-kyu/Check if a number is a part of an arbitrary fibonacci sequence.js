// You will be given a function, isFibo, which will take three arguments: a, b and f.
// a is the first term of a Fibonacci sequence, b is the second term of this sequence ( it will always be bigger than or equal to a and they'll be both always positive, so don't worry about pesky input checking ) and f is a number which you'll need to check whether or not is a part of this Fibonacci sequence.
// Good luck, muh fellow coding warrior.

function isFibo(a, b, f) {
  let x1 = a;
  let x2 = b;
  let sum;
  
  if (f === a || f === b) return true;
  
  while (x2 < f) {
    sum = x1 + x2;
    x1 = x2;
    x2 = sum;
  }
  
  return sum === f ? true : false;
}
