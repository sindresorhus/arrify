# arrify [![Build Status](https://travis-ci.org/sindresorhus/arrify.svg?branch=master)](https://travis-ci.org/sindresorhus/arrify)

> Convert a value to an array


## Install

```
$ npm install --save arrify
```


## Usage

```js
const arrify = require('arrify');

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

*Supplying `null` or `undefined` results in an empty array.*


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
