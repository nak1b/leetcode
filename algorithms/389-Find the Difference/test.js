'use strict';

const assert = require("assert");
const { findTheDifference } = require("./");


describe("#findTheDifference", () => {
	it('s = "a", t = "aa"', () => {
		assert.equal(findTheDifference("a", "aa"), "a");
	});

	it('s = "abcd", t = "abcde"', () => {
		assert.equal(findTheDifference("abcd", "abcde"), "e");
	});

	it('s = "gftr", t = "rygtf"', () => {
		assert.equal(findTheDifference("gftr", "rygtf"), "y");
	});
});