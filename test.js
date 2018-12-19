import test from 'ava'
import fn from './'

test(t => {
	t.is(fn('foo')[0], 'foo')
	t.is(fn(['foo'])[0], 'foo')
	t.is(fn(null)[0], undefined)
	t.is(fn(undefined)[0], undefined)
})
