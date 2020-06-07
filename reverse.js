/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let arr = String(x).split('').reverse();
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '0') {
      arr = arr.slice(i);
      break;
    }
  }
  
  if(x < 0) {
    arr.pop();
    arr.unshift('-')
  }

  return  Number(arr.join('')) > Math.pow(2, 31) - 1 || Number(arr.join('')) < Math.pow(-2, 31) ? 0 : Number(arr.join(''));
};