'use strict';

const assert = require('assert');
const { romanToInt } = require('./');


describe("#romanToInt", () => {
	it("s = I", () => {
		assert.equal(romanToInt("I"), 1);
	});

	it("s = V", () => {
		assert.equal(romanToInt("V"), 5);
	});

	it("s = X", () => {
		assert.equal(romanToInt("X"), 10);
	});

	it("s = L", () => {
		assert.equal(romanToInt("L"), 50);
	});

	it("s = C", () => {
		assert.equal(romanToInt("C"), 100);
	});

	it("s = D", () => {
		assert.equal(romanToInt("D"), 500);
	});

	it("s = M", () => {
		assert.equal(romanToInt("M"), 1000);
	});

	it("s = DCXXI", () => {
		assert.equal(romanToInt("DCXXI"), 621);
	});

	it("s = dcxxi", () => {
		assert.equal(romanToInt("dcxxi"), 621);
	});

	it("s = ", () => {
		assert.equal(romanToInt(""), false);
	});

	it("s = 123", () => {
		assert.equal(romanToInt(123), false);
	});

	it("s = MCMLIV", () => {
		assert.equal(romanToInt("MCMLIV"), 1954);
	});

	it("s = MCMXC", () => {
		assert.equal(romanToInt("MCMXC"), 1990);
	});

	it("s = MMXIV", () => {
		assert.equal(romanToInt("MMXIV"), 2014);
	});

	it("s = DCCXCVIII", () => {
		assert.equal(romanToInt("DCCXCVIII"), 798);
	});


});