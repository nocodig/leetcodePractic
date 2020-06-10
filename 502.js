/**
 * 假设 力扣（LeetCode）即将开始其 IPO。为了以更高的价格将股票卖给风险投资公司，力扣 希望在 IPO 之前开展一些项目以增加其资本。
 * 由于资源有限，它只能在 IPO 之前完成最多 k 个不同的项目。帮助 力扣 设计完成最多 k 个不同项目后得到最大总资本的方式。
 * 给定若干个项目。对于每个项目 i，它都有一个纯利润 Pi，并且需要最小的资本 Ci 来启动相应的项目。最初，你有 W 资本。当你完成一个项目时，
 * 你将获得纯利润，且利润将被添加到你的总资本中。
 * 总而言之，从给定项目中选择最多 k 个不同项目的列表，以最大化最终资本，并输出最终可获得的最多资本。
 * 
 * 示例 1:
 * 输入: k=2, W=0, Profits=[1,2,3], Capital=[0,1,1].
 * 输出: 4
 * 解释:
 * 由于你的初始资本为 0，你尽可以从 0 号项目开始。
 * 在完成后，你将获得 1 的利润，你的总资本将变为 1。
 * 此时你可以选择开始 1 号或 2 号项目。
 * 由于你最多可以选择两个项目，所以你需要完成 2 号项目以获得最大的资本。
 * 因此，输出最后最大化的资本，为 0 + 1 + 3 = 4。
 */

 /**
 * @param {number} k 完成项目个数
 * @param {number} W 资本
 * @param {number[]} Profits 项目能获得最大纯利润
 * @param {number[]} Capital 项目最小启动资本
 * @return {number}
 */
var findMaximizedCapital = function(k, W, Profits, Capital) {
  let count = W;

  while(k > 0) {
    count += findMaxProfitsByW(count, Profits, Capital);
    k--;
  }

  return count;
};

function findMaxProfitsByW(W, Profits, Capital) {
  const copyProfilts = [...Profits];
  const copyCapital = [...Capital];

  while (true) {
    let maxProfilt = Math.max(...copyProfilts);
    let maxProfiltIndex = copyProfilts.indexOf(maxProfilt);

    if (maxProfilt < 0) {
      return 0;
    }

    if (W >= copyCapital[maxProfiltIndex]) {
      Profits[maxProfiltIndex] = -1;
      Capital[maxProfiltIndex] = -1;
      return maxProfilt;
    } else {
      copyProfilts[maxProfiltIndex] = -1;
      copyCapital[maxProfiltIndex] = -1;
    }
  }
}

// 最终结果超时

console.log(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]));