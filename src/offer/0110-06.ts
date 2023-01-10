/*
 * @Author: 李放
 * @Date: 2023-01-10 14:16:45
 * @Description: 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 * @FilePath: /leetcodePractic/src/offer/0110-06.ts
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/**
 * 遍历整个链表，然后将值插入结果数组的数组头部
 */
function reversePrint(head: ListNode | null): number[] {
  const result:number[] = []
  let current = head

  while (current) {
    result.unshift(current.val)

    current = current?.next;
  }

  return result
};