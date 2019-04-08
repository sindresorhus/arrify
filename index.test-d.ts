import {expectType, expectError} from 'tsd';
import arrify = require('.');

expectType<[]>(arrify(null));
expectType<[]>(arrify(undefined));
expectType<[string]>(arrify('🦄'));
expectType<string[]>(arrify(['🦄']));
expectType<[boolean]>(arrify(true));
expectType<[number]>(arrify(1));
expectType<[{}]>(arrify({}));
expectType<([string | number, string | number])[]>(
	arrify(new Map<string | number, string | number>([[1, 2], ['a', 'b']]))
);
expectType<number[]>(arrify(new Set([1, 2])));
expectError(arrify(['🦄'] as const).push(''));
expectType<number[] | []>(arrify(Boolean() ? [1, 2] : null));
expectType<number[] | []>(arrify(Boolean() ? [1, 2] : undefined));
expectType<number[] | [string]>(arrify(Boolean() ? [1, 2] : '🦄'));
expectType<number[] | string[]>(arrify(Boolean() ? [1, 2] : ['🦄']));
expectType<number[] | [boolean]>(arrify(Boolean() ? [1, 2] : true));
expectType<number[] | [number]>(arrify(Boolean() ? [1, 2] : 3));
expectType<number[] | [{}]>(arrify(Boolean() ? [1, 2] : {}));
expectType<number[] | (string | boolean)[]>(
	arrify(Boolean() ? [1, 2] : new Set<string | boolean>(['🦄', true]))
);
expectType<number[] | [boolean] | [string]>(
	arrify(Boolean() ? [1, 2] : Boolean() ? true : '🦄')
);
