// Middle of the Linked List

var middleNode = function(head) {
    let slow_ptr = head;
    let fast_ptr = head;
    while(fast_ptr != null && fast_ptr.next != null){   // Time Complexity = O(n), Space complexity = O(1)
        slow_ptr= slow_ptr.next;
        fast_ptr= fast_ptr.next.next;
    }
    return slow_ptr;
}