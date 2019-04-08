/**
Convert a value to an array.

_Supplying `null` or `undefined` results in an empty array._

@example
```
import arrify = require('arrify');

arrify('🦄');
//=> ['🦄']

arrify(['🦄']);
//=> ['🦄']

arrify(new Set(['🦄']));
//=> ['🦄']

arrify(null);
//=> []

arrify(undefined);
//=> []
```
*/
declare function arrify<ValueType>(
	value: ValueType
): ValueType extends (null | undefined)
	? []
	: ValueType extends string
	? [string]
	: ValueType extends (infer T)[]
	? T[]
	: ValueType extends ReadonlyArray<infer T> // TODO: Use 'readonly (infer T)[]' in the next major version
	? ReadonlyArray<T>
	: ValueType extends Iterable<infer T>
	? T[]
	: [ValueType];

export = arrify;
