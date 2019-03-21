/**
Convert a value to an array.

_Supplying `null` or `undefined` results in an empty array._

@example
```
import arrify from 'arrify';

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
export default function arrify(value: null | undefined): [];
export default function arrify(value: string): [string];
export default function arrify<ValueType>(value: ValueType[]): ValueType[];
export default function arrify<ValueType>(
	value: Iterable<ValueType>
): ValueType[];
