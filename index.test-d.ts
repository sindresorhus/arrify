/* eslint-disable  @typescript-eslint/ban-types */
import {expectType, expectError, expectAssignable} from 'tsd';
import arrify from './index.js';

expectType<[]>(arrify(null));
expectType<[]>(arrify(undefined));
expectType<[string]>(arrify('🦄'));
expectType<string[]>(arrify(['🦄']));
expectAssignable<[boolean]>(arrify(true));
expectType<[number]>(arrify(1));
expectAssignable<[Record<string, unknown>]>(arrify({}));
expectType<[number, string]>(arrify([1, 'foo']));
expectType<Array<string | boolean>>(
	arrify(new Set<string | boolean>(['🦄', true]))
);
expectType<number[]>(arrify(new Set([1, 2])));
expectError(arrify(['🦄'] as const).push(''));
expectType<[number, number] | []>(arrify(false ? [1, 2] : null));
expectType<[number, number] | []>(arrify(false ? [1, 2] : undefined));
expectType<[number, number] | [string]>(arrify(false ? [1, 2] : '🦄'));
expectType<[number, number] | [string]>(arrify(false ? [1, 2] : ['🦄']));
expectAssignable<number[] | [boolean]>(arrify(false ? [1, 2] : true));
expectAssignable<number[] | [number]>(arrify(false ? [1, 2] : 3));
expectAssignable<number[] | [Record<string, unknown>]>(arrify(false ? [1, 2] : {}));
expectAssignable<number[] | [number, string]>(
	arrify(false ? [1, 2] : [1, 'foo'])
);
expectAssignable<number[] | Array<string | boolean>>(
	arrify(false ? [1, 2] : new Set<string | boolean>(['🦄', true]))
);
expectAssignable<number[] | [boolean] | [string]>(
	arrify(false ? [1, 2] : (false ? true : '🦄'))
);
