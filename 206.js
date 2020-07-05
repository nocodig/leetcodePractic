// 反转一个单链表。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let pre = null;
  let current = head;
  while(current) {
    const tem = current.next;
    current.next = pre;
    pre = current;
    current = tem;
  }

  return pre;
};