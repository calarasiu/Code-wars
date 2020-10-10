/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1) {
  let l1number="";
    for(let i = l1.length-1; i>=0; i--){
      l1number+=(l1[i].toString());
      
    }
    return l1number;
};

console.log(addTwoNumbers([2,4,3]));