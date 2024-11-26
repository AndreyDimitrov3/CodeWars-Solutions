// The Fibonacci numbers are the numbers in the following integer sequence (Fn): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
// such that:
// F(0) = 1
// F(1) = 1
// F(n)=F(n−1)+F(n−2)
// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying:
// F(n)∗F(n + 1) = prod
// F(n)∗F(n+1)=prod

// Your function takes an integer (prod) and returns an array/tuple (check the function signature/sample tests for the return type in your language):
// if F(n) * F(n+1) = prod:
// (F(n), F(n+1), true)
// If you do not find two consecutive F(n) verifying F(n) * F(n+1) = prod:
// (F(n), F(n+1), false)
// where F(n) is the smallest one such as F(n) * F(n+1) > prod.
// Examples:
// 714 ---> (21, 34, true)
// --> since F(8) = 21, F(9) = 34 and 714 = 21 * 34
// 800 --->  (34, 55, false)
// --> since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55

function productFib(prod){
  let n1 = 1;
  let n2 = 1;
  let product;
  let variable;
  
    while(true) {
      product = n1 * n2;
        
      if(product === prod) {
        return [n1, n2, true];
      }
      
      else if(product > prod) {
        return [n1, n2, false];
      }
      
      variable = n1;
      n1 = n2;
      n2 = variable + n2;
    }
}
