# jest

Co to je? Nástroj na testování. V rychlosti: Instaluje se to takto:

```sh
$ npm i jest babel-jest @babel/core @babel/preset-env --save-dev
```

Přidáme si npm script:

```json
"scripts": {
	"test": "jest"
  },
```

Jak vypadá test?

```js
import { inArray } from './inArray';

test.each([
	[[1, 2, 3], 2, true],
	[[1, 2, 3], 4, false],
	[['a', 'b', 'c'], 'a', true],
	[['a', 'b', 'c'], 'd', false]
])(
	'.inArray(%o, %o) = %s',
	(array, valueToFind, expected) => {
	expect(inArray(array, valueToFind)).toBe(expected);
},
);
```

Spustíme:

```sh
npm run test

> 04-jest@1.0.0 test ./04-jest
> jest

 PASS  src/inArray.test.js
  ✓ .inArray([ 1, 2, 3, [length]: 3 ], 2) = true (3ms)
  ✓ .inArray([ 1, 2, 3, [length]: 3 ], 4) = false
  ✓ .inArray([ 'a', 'b', 'c', [length]: 3 ], 'a') = true (1ms)
  ✓ .inArray([ 'a', 'b', 'c', [length]: 3 ], 'd') = false

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.087s
Ran all test suites.
```