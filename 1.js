// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

var twoSum = function(nums, target) {
  const arrHash = {};

  for (let i = 0; i < nums.length; i++) {
    if (arrHash[target - nums[i]] !== undefined) {
      return [arrHash[target - nums[i]], i];
    }

    arrHash[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 9 , 11], 9))