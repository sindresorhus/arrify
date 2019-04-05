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
declare function arrify(value: null | undefined): [];
declare function arrify(value: string): [string];
declare function arrify<ValueType>(value: ValueType[]): ValueType[];
declare function arrify<ValueType>(value: Iterable<ValueType>): ValueType[];
declare function arrify<ValueType>(value: ValueType): [ValueType];

export = arrify;
