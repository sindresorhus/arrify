import test from 'ava';
import arrify from '.';

test('main', t => {
	t.deepEqual(arrify('foo'), ['foo']);
	t.deepEqual(arrify(new Map([[1, 2], ['a', 'b']])), [[1, 2], ['a', 'b']]);
	t.deepEqual(arrify(new Set([1, 2])), [1, 2]);
	t.deepEqual(arrify(null), []);
	t.deepEqual(arrify(undefined), []);

	const fooArray = ['foo'];
	t.is(arrify(fooArray), fooArray);
});
