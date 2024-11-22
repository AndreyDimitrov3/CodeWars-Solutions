// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

export function xo(str: string) : boolean {
  const stringArr: string[] = str.split("");
  let xArr: string[] = [];
  let oArr: string[] = [];
  
  for(let i = 0; i < stringArr.length; i++) {
    if (stringArr[i].toLowerCase() === "x") {
      xArr.push(stringArr[i]);
    }
    if(stringArr[i].toLowerCase() === "o") {
      oArr.push(stringArr[i]);
    }
  }
  
  return xArr.length === oArr.length ? true : false;
}
