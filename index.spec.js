'use strict';

const Stringify = require('.');

const stringifyit = Stringify.stringifyit;
const stringify = Stringify.stringify;
const StringifierRangeError = require('./error').StringifierRangeError;

class CustomArray extends Array {
    [stringify](stringifier) {
        stringifier.update({a: {b: 5}});
    }
}

const testCases = {
    map: [
        new Map([[{a: 5}, 1], [new Map([[2, 2], [{hfg: {hghg: 65}}, 1], [3, 3]]), 'fgh'], [new Map([[2, 2], [{hfg: {gdfd: 65}}, 1], [3, 3]]), 2], [{}, 3]]),
        new Map([[{}, 3], [{a: 5}, 1], [new Map([[2, 2], [{hfg: {gdfd: 65}}, 1], [3, 3]]), 2], [new Map([[2, 2], [{hfg: {hghg: 65}}, 1], [3, 3]]), 'fgh']])
    ],
    set: [
        new Set([{a: 5}, 2, new Set([{a: {b: 5}}, 2, 3, {}, 5]), {}, 5]),
        new Set([new Set([{a: {b: 5}}, 2, 3, {}, 5]), {}, 2, {a: 5}, 5])
    ],
    array: [
        [5, 4, 3, 2, 1, 0],
        new Uint16Array([5, 4, 3, 2, 1, 0])
    ],
    object: [
        {a: 'a', b: 'b'},
        {b: 'b', a: 'a'}
    ],
    nestedObject: [
        {a: 'a', b: {a: 1}},
        {a: 'a', b: {a: 2}}
    ],
    unorderedArray: [
        [5, 4, 3, 2, 1, 0],
        [0, 5, 4, 3, 2, 1]
    ],
    types: [
        ['1', '2', '3'],
        [1, 2, 3]
    ],
    objectNull: [
        Object.create(null),
        Object.create(null)
    ],
    customRules: [
        new CustomArray(),
        {a: {b: 5}}
    ],
    complex: [
        {
            a: 1,
            b: 2,
            c: 3,
            d: {
                e: 4,
                f: 5
            },
            g: 0,
            h: undefined,
            i: null,
            j: new Set([1, 2, 3, 4, 5]),
            k: new Map([[1, 1], [2, 2], [3, 3]]),
            l: new Date(0),
            m: Symbol(),
            n: function n() {
                return 'n';
            },
            o: [5, 4, 3, 2, 1, 0]
        },
        {
            a: 1,
            c: 3,
            b: 2,
            d: {
                f: 5,
                e: 4
            },
            g: 0,
            h: undefined,
            i: null,
            j: new Set([3, 1, 2, 5, 4]),
            k: new Map([[2, 2], [1, 1], [3, 3]]),
            l: new Date(0),
            m: Symbol(),
            n: function n() {
                return 'n';
            },
            o: [5, 4, 3, 2, 1, 0]
        }
    ]
};

describe('Stringifyit', () => {
    it('should order Maps', () => {
        checkStringsEquality(testCases.map, true);
    });

    it('should order Sets', () => {
        checkStringsEquality(testCases.set, true);
    });

    it('should stringify TypedArray as Array', () => {
        checkStringsEquality(testCases.array, true);
    });

    it('should sort object keys', () => {
        checkStringsEquality(testCases.object, true);
    });

    it('should not stringify with types by default', () => {
        checkStringsEquality(testCases.types, true);
    });

    it('should stringify Object.create(null) objects', () => {
        checkStringsEquality(testCases.objectNull, true);
    });

    it('should stringify with types if includePrimitiveTypes is true', () => {
        checkStringsEquality(testCases.types, false, {includePrimitiveTypes: true});
    });

    it('should stringify nested objects', () => {
        checkStringsEquality(testCases.nestedObject, false);
    });

    it('should not sort arrays', () => {
        checkStringsEquality(testCases.unorderedArray, false);
    });

    it('should stringify complex data', () => {
        checkStringsEquality(testCases.complex, true);
    });

    it('should stringify using custom rules for types', () => {
        checkStringsEquality(testCases.customRules, true);
    });

    it('should throw StringifierRangeError for cycled object', () => {
        const data = {};
        data.data = data;

        expect(stringifyit.bind(null, data)).toThrowError(StringifierRangeError);
    });
});

function checkStringsEquality(testCase, shouldBeEqual, params) {
    const string1 = stringifyit(testCase[0], params);
    const string2 = stringifyit(testCase[1], params);

    if (shouldBeEqual) {
        expect(string1).toBe(string2);
    } else {
        expect(string1).not.toBe(string2);
    }
}
