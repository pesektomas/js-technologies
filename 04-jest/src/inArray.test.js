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
