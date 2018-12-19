'use strict'

function flattenDeep(a) {
	return a.reduce((acc, val) => {
		return Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val)
	}, [])
}

module.exports = function(val, flatten) {
	if (val === null || val === undefined) {
		return []
	}

	const unflattened = Array.isArray(val) ? val : [val]
	return flatten ? flattenDeep(unflattened) : unflattened
}
