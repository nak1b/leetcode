'use strict';

module.exports = { mergeTwoLists };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
	let result = null;

  while(l1 && l2) {
  	let next;
  	if(l1.val < l2.val) {
  		next = l1;
  		l1 = l1.next;
  	} else {
  		next = l2;
  		l2 = l2.next;
  	}

  	if(result === null) {
  		result = next;
  	} else {
  		result.next = next;
  		result = next;
  	}
  }

  let next;
	if(l1) {
		next = l1;
		l1 = l1.next;
	}

	if(l2) {
		next = l2;
		l2 = l2.next;
	}

	if(result === null) {
		result = next;
	} else {
		result.next = next;
		result = next;
	}


  return result;
};
