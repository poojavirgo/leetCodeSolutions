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
 var addTwoNumbers = function(l1, l2) {
    let newNode = new ListNode(0);
    let current = newNode;
    let p1= l1;
    let p2=l2;
    let carry=0;
    while(p1!== null || p2!== null || carry!==0){
        value1 = p1!== null? p1.val: 0;
        value2 = p2!== null? p2.val: 0;   
       const sum = value1 + value2 + carry;
       const nodeValue =  sum%10;
        const node = new ListNode(nodeValue,null);
        current.next= node;
        current=node;
        carry = Math.floor(sum/10);
        p1= p1 !== null? p1.next :null;
         p2= p2 !== null? p2.next :null;
        
    }
    return newNode.next;
   
};