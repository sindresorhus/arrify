'use strict';
var test = require('ava');
var arrify = require('./');

test(function (t) {
	t.assert(arrify('foo')[0] === 'foo');
	t.assert(arrify(['foo'])[0] === 'foo');
	t.assert(arrify(null)[0] === undefined);
	t.assert(arrify(undefined)[0] === undefined);
	t.end();
});
