/**
 * @Description
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * @Examples
 * Example 1:
 *  Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 *
 * Example 2:
 *  * Input: l1 = [0], l2 = [0]
 * Output: [0]
 *
 * Example 3:
 *  * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 *
 * @Constraints:
 *
 * The number of nodes in each linked list is in the range [1, 100].
 * 0 <= Node.val <= 9
 * It is guaranteed that the list represents a number that does not have leading zeros.
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 *
 * @Test-Cases
 *
 * l1 - [2,4,3]
 * l2 - [5,6,4]
 *
 * l1 - [0]
 * l2 - [0]
 *
 * l1 - [9,9,9,9,9,9,9]
 * l2 - [9,9,9,9]
 *
*/

/**
 * Steps
 * reverse both list
 * add numbers in lists up
 * return reverse list again and return answer
*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var node3 = new ListNode(3);
var node2 = new ListNode(4, node3);
var node1 = new ListNode(2, node2);
var head = node1;

var t1_node3 = new ListNode(4);
var t1_node2 = new ListNode(6, t1_node3);
var t1_node1 = new ListNode(5, t1_node2);
var head2 = t1_node1;

var addTwoNumbers = function(l1, l2) {
    var resultNode = new ListNode(0); //Create a starting node
    var current = resultNode; // set our current node to the node just created
    let overflow = 0; // handles overflows

    while ( l1 !== null || l2 !== null ) { //continue running while either nodes have values
        let val1 = ( l1 !== null ? l1.val : 0 ); //checks if node is there or defaults to 0
        let val2 = ( l2 !== null ? l2.val : 0 );
        let answer = val1 + val2 + overflow; //adds node values and overflow from previous answer

        overflow = Math.floor( answer / 10 ); //calculates overflow by flooring the answer by 10

        current.next = new ListNode( answer % 10 )
        current = current.next;

        if ( l1 !== null) l1 = l1.next;
        if ( l2 !== null) l2 = l2.next;

    }

    if ( overflow >= 1 ) {
        current.next = new ListNode(overflow);
    }

    return resultNode.next;
};

addTwoNumbers(head, head2);
