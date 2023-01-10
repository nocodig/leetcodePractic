/*
 * @Author: 李放
 * @Date: 2023-01-10 14:32:14
 * @Description: 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 * @FilePath: /leetcodePractic/src/offer/0110-24.ts
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  const listArr = [];
  let result:ListNode |null = null;
  let temp: ListNode | null = null;

  while(head) {
    listArr.push(head.val)

    head = head.next;
  }

  listArr.reverse().forEach((item, index) => {
    if (index === 0) {
      temp = new ListNode(item)
      result = temp
      return;
    }

    if (temp) {
      temp.next = new ListNode(item)
      temp = temp.next
    }
  })

  return result
};
