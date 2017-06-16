'use strict';

const assert = require("assert");
const { reverseString } = require("./");


describe("#reverseString", () => {
	it('s = "Hello"', () => {
		assert.equal(reverseString("Hello"), "olleH");
	});

	it('s = "a"', () => {
		assert.equal(reverseString("a"), "a");
	});

	it('s = "Hello"', () => {
		assert.equal(reverseString("fg"), "gf");
	});

	it('s = "Hello"', () => {
		assert.equal(reverseString(""), "");
	});
});