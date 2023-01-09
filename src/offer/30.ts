/*
 * @Author: 李放
 * @Date: 2023-01-09 16:24:40
 * @Description:定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
 * @FilePath: /leetcodePractic/src/offer/30.ts
 */

/**
 * 主要用一个辅助栈，用于存储最小元素，当添加元素时，优先判断minList是否有值，如果有值的情况下，栈顶元素和新添加的元素进行比较，将最小的元素推入栈顶，这样minList数组最后一个元素永远会保持最小元素
 */
class MinStack {
  private stack: number[];
  private minList: number[];

  constructor() {
    this.stack = [];
    this.minList = [];
  }

  push(x: number): void {
    this.stack.push(x);

    if (this.minList.length) {
      this.minList.push(Math.min(this.minList[this.minList.length - 1], x))
    } else {
      this.minList.push(x);
    }
  }

  pop(): void {
    this.stack.pop();
    this.minList.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  min(): number {
    return this.minList[this.minList.length - 1];
  }
}
