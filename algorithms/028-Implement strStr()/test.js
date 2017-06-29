'use strict';

const assert = require('assert');
const { strStr } = require('./');
const _ = require('lodash');

describe('#strStr', () => {
	const tests = [
		{
			haystack: 'helloworld',
			needle: 'hello',
			result: 0
		},
		{
			haystack: 'helloworld',
			needle: 'zero',
			result: -1
		},
		{
			haystack: 'helloworld',
			needle: 'world',
			result: 5
		},
		{
			haystack: '',
			needle: '',
			result: 0
		},
		{
			haystack: 'hello',
			needle: '',
			result: 0
		},
		{
			haystack: '',
			needle: 'hello',
			result: -1
		},
		{
			haystack: 'mississippi',
			needle: 'pi',
			result: 9
		}
	];

	 _.forEach(tests, ({haystack, needle, result}) => {
  	it(`${haystack}, ${needle}-> ${result}`, () => {
      assert.equal(strStr(haystack, needle), result);
    });
  });

});