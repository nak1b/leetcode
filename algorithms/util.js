'use strict';

const _ = require('lodash');

module.exports = { makeLinkNodes };

class LinkNodes {
	constructor(val) {
	  this.val = val;
	  this.next = null;
	}
}

function makeLinkNodes(array) {
	return _.chain(array)
		.map(n => new LinkNodes(n))
		.reduce((result, node) => {
			let target = result;
			while(target.next) {
				target = target.next;
			}
			target.next = node;
			return node;
		})
		.value();
}