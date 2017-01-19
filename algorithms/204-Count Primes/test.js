'use strict';

const assert = require("assert");
const {countPrimes} = require("./");


describe('#countPrime', () => {

	it('n = 1', () => {
		const n = 1
		assert.equal(countPrimes(n), 0);
	});

	it('n = 0', () => {
		const n = 0
		assert.equal(countPrimes(n), 0);
	})

	it('n = 2', () => {
		const n = 2
		assert.equal(countPrimes(n), 0);
	})

	it('n = 3', () => {
		const n = 3
		assert.equal(countPrimes(n), 1);
	})

	it('n = 10', () => {
		const n = 10
		assert.equal(countPrimes(n), 4);
	})

	it('n = 100', () => {
		const n = 100
		assert.equal(countPrimes(n), 25);
	})

	it('n = 1000', () => {
		const n = 1000
		assert.equal(countPrimes(n), 168);
	})

});