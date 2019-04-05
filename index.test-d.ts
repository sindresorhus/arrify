import {expectType} from 'tsd';
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
