/*
 * @Author: 李放
 * @Date: 2023-01-09 15:32:46
 * @Description: 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 * @FilePath: /leetcodePractic/src/offer/09.ts
 */

// [1,2,3]
// [3,2,1]
/**
 * 一共两个栈，inStack用于存放入队元素，outStack用来存放出队元素，
 * 对于appendTail方法，直接讲元素压入instack内即可，
 * 对于deleteHead方法，优先判断outStack是否已经清空。接着判断inStack元素是否为空，如果不为空的情况下，将inStack元素全部压入ouStack中，如果上面条件都不满足，返回-1
 */
class CQueue {
  private inStack: number[];
  private outStack: number[];

  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  appendTail(value: number): void {
    this.inStack.push(value);
  }

  deleteHead(): number {
    if (this.outStack.length) {
      return this.outStack.pop()!;
    } else {
      if (this.inStack.length) {
        while (this.inStack.length) {
          const result = this.inStack.pop();
          if (result) {
            this.outStack.push(result);
          }
        }

        return this.outStack.pop()!;
      }

      return -1;
    }
  }
}
