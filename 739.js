// 请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

// 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

// 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。
// 

// 能解，方案不太好 


/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const result = [];
  let t = T[0];

  const maxT = Math.max(...T);

  if (T.length === 1) {
    result.push(0);
  } else {
    for (let i = 0; i < T.length; i++) {
      const stack = [];

      if (t <= maxT) {
        t = T[i];
      }

      if (t === maxT || i === (T.length - 1)) {
        result.push(0)
      } else {
        for (let j = i + 1; j < T.length; j++) {
          if (t < T[j]) {
            stack.push(T[j]);
            result.push(stack.length);
            break;
          } else {
            stack.push(T[j])
          }
        }
      }
      
    }
  }


  return result;
};

console.log(dailyTemperatures([55,38,53,81,61,93,97,32,43,78]))