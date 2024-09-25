/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    var current = list1
    var count = 0
    var start = null
    var end = null
    
    // get start and end
    while(current != null){
        if(count == a){
            start = prev
        }
         if(count == b){
            end = current.next
        }
        prev = current
        current = current.next
        count++
    }
    current = list1
    var dummy = new ListNode(0)
    dummy = current
    cr2 = list2
    var dummy2 = new ListNode(0)
    dummy2 = cr2

    //add end to last of list2
    while(cr2.next != null){
        cr2 = cr2.next
    }
    cr2.next = end
    // add list2 to list1
     while(current != null){
        if(current == start){
            current.next = dummy2
        }
        current= current.next
    }
    return dummy
};