/*
 * @Author: lifang
 * @Date: 2021-11-01 11:58:22
 * @LastEditTime: 2021-11-01 21:24:43
 * @LastEditors: lifang
 * @Description: 删除排序数组中的重复项
 * @FilePath: /leetcodePractic/src/20211101/index.js
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
//  const removeDuplicates = (nums) => {
//   let left = 0;
//   let right = nums.length -1

//   while( left < nums.length) {
//     if (nums[left] === nums[right] && left < right) {
//       nums.splice(right, 1)
//       right--
//     } else {
//       right--
//     }

//     if (left >= right) {
//       left++
//       right = nums.length - 1
//     }
//   }
  
//   return nums.length
// };

const removeDuplicates = (nums) => {
  if (nums.length === 0) {
    return 0
  }

  let slow = 0;
  let fast = 1;

  while(fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow += 1;
      nums[slow] = nums[fast]
    }

    fast++;
  }

  return slow + 1
};


console.log(removeDuplicates([0,1,1,1,1,2,2,3,3,4]))
