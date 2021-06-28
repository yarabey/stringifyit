# stringifyit ![npm](https://img.shields.io/npm/v/stringifyit?color=brightgreen&label=version&style=flat) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/stringifyit?color=brightgreen&label=size)

Fast Node.js stringify library with sorting and typing. Provides [Stringifier](#Stringifier) class. [Stringifier](#Stringifier) provides [stringify Symbol](#stringifierstringify--symbol) to allow you [customize](#stringifierstringifycallback--function) stringifying your own classes.

See [benchmarks](#benchmarks) for compare to other libs.

## Install

```shell
$ npm install stringifyit --save
```

## Features

-   Written on TypeScript;
-   Supports Node.js >= 12.6.0;
-   Supports `Map`/`WeakMap`, `Set`/`WeakSet` and typed arrays;
-   Supports sort `Set`, `Map`, object keys and optional sort arrays;
-   Supports custom stringify rules for user-defined classes;
-   Useful for browsers;
-   Very fast stringify library.

## API

### Classes

<dl>
<dt><a href="#Stringifier">Stringifier</a></dt>
<dd><p>Provides interface to stringify any value
Sort Map, Set and object keys by default without ability to avoid it</p>
</dd>
</dl>

### Members

<dl>
<dt><a href="#stringify">stringify</a> : <code><a href="#Stringifier..stringify">stringify</a></code></dt>
<dd></dd>
</dl>

### Functions

<dl>
<dt><a href="#stringifyit">stringifyit(value, [options])</a> ⇒ <code>string</code></dt>
<dd><p>Helper for simple stringify single value</p>
</dd>
</dl>

<a name="Stringifier"></a>

### Stringifier

Provides interface to stringify any value
Sort Map, Set and object keys by default without ability to avoid it

**Kind**: global class

-   [Stringifier](#Stringifier)
    -   [new Stringifier([options])](#new_Stringifier_new)
    -   _instance_
        -   [.string](#Stringifier+string) : <code>string</code>
        -   [.update(value)](#Stringifier+update)
    -   _inner_
        -   [~stringifyCallback](#Stringifier..stringifyCallback) : <code>function</code>
        -   [~stringify](#Stringifier..stringify) : <code>Symbol</code>
        -   [~options](#Stringifier..options) : <code>Object</code>

<a name="new_Stringifier_new"></a>

#### new Stringifier([options])

| Param     | Type                                          |
| --------- | --------------------------------------------- |
| [options] | <code>[options](#Stringifier..options)</code> |

<a name="Stringifier+string"></a>

#### stringifier.string : <code>string</code>

Accumulator string

**Kind**: instance property of <code>[Stringifier](#Stringifier)</code>
**Access:** public
<a name="Stringifier+update"></a>

#### stringifier.update(value)

Stringifies value and append it to current accumulator string

**Kind**: instance method of <code>[Stringifier](#Stringifier)</code>

| Param | Type            |
| ----- | --------------- |
| value | <code>\*</code> |

<a name="Stringifier..stringifyCallback"></a>

#### Stringifier~stringifyCallback : <code>function</code>

Custom stringify callback declared with [stringify Symbol](#Stringifier..stringify)

**Kind**: inner typedef of <code>[Stringifier](#Stringifier)</code>

| Param       | Type                                     | Description          |
| ----------- | ---------------------------------------- | -------------------- |
| stringifier | <code>[Stringifier](#Stringifier)</code> | Stringifier instance |

**Example**

```javascript
import {stringify} from 'stringifyit';

CustomType.prototype[stringify] = function (stringifier) {
    stringifier.string += 'start';

    stringifier.update(this.someProp);
    stringifier.update(['use', 'any', 'type']);

    stringifier.string += 'end';
};
```

<a name="Stringifier..stringify"></a>

#### Stringifier~stringify : <code>Symbol</code>

Symbol to add custom stringify rules for user types

**Kind**: inner typedef of <code>[Stringifier](#Stringifier)</code>
<a name="Stringifier..options"></a>

#### Stringifier~options : <code>Object</code>

Stringifier options

**Kind**: inner typedef of <code>[Stringifier](#Stringifier)</code>
**Properties**

| Name                    | Type                 | Description                                      |
| ----------------------- | -------------------- | ------------------------------------------------ |
| sortArrays              | <code>boolean</code> | Sort arrays before stringify                     |
| includePrimitiveTypes   | <code>boolean</code> | Stringify primitive values (and functions) types |
| includeConstructorNames | <code>boolean</code> | Stringify non-primitive values constructor names |

<a name="stringify"></a>

### stringify : <code>[stringify](#Stringifier..stringify)</code>

**Kind**: global variable
<a name="stringifyit"></a>

### stringifyit(value, [options]) ⇒ <code>string</code>

Helper for simple stringify single value

**Kind**: global function

| Param     | Type                                          |
| --------- | --------------------------------------------- |
| value     | <code>\*</code>                               |
| [options] | <code>[options](#Stringifier..options)</code> |

**Example**

```javascript
import {stringifyit} from 'stringifyit';

stringifyit({key: 'value', value: 'key'}) === stringifyit({value: 'key', key: 'value'}); // true
stringifyit(new Set(['value1', 'value2'])) === stringifyit(new Set(['value2', 'value1'])); // true
stringifyit(
    new Map([
        ['key', 'value'],
        ['value', 'key'],
    ]),
) ===
    stringifyit(
        new Map([
            ['value', 'key'],
            ['key', 'value'],
        ]),
    ); // true
stringifyit([1, 2, 3]) === stringifyit([1, 2, 3]); // true
stringifyit([1, 2, 3], {sortArrays: true}) === stringifyit([1, 3, 2], {sortArrays: true}); // true

stringifyit([1, 2, 3]) === stringifyit([1, 3, 2]); // false
stringifyit(5) === stringifyit('5'); // false
```

### Custom stringifiers [source](stringifiers)

#### Object.prototype[[stringify](#Stringifier..stringify)] : <code>[stringifyCallback](#Stringifier..stringifyCallback)</code>

#### Array.prototype[[stringify](#Stringifier..stringify)] : <code>[stringifyCallback](#Stringifier..stringifyCallback)</code>

#### TypedArray.prototype[[stringify](#Stringifier..stringify)] : <code>[stringifyCallback](#Stringifier..stringifyCallback)</code>

#### Date.prototype[[stringify](#Stringifier..stringify)] : <code>[stringifyCallback](#Stringifier..stringifyCallback)</code>

#### Map.prototype[[stringify](#Stringifier..stringify)] : <code>[stringifyCallback](#Stringifier..stringifyCallback)</code>

#### WeakMap.prototype[[stringify](#Stringifier..stringify)] : <code>[stringifyCallback](#Stringifier..stringifyCallback)</code>

#### Set.prototype[[stringify](#Stringifier..stringify)] : <code>[stringifyCallback](#Stringifier..stringifyCallback)</code>

#### WeakSet.prototype[[stringify](#Stringifier..stringify)] : <code>[stringifyCallback](#Stringifier..stringifyCallback)</code>

## Benchmarks

Benchmarked with Node.js v12.6.

### Usage

-   `npm run bench` to run benchmarking stringifyit operations/second for different cases.

### Results

```
array x 2,189,812 ops/sec ±0.34% (86 runs sampled)
object x 6,753,130 ops/sec ±0.42% (86 runs sampled)
nestedObject x 107,492 ops/sec ±0.29% (86 runs sampled)
complexObject_5items x 64,048 ops/sec ±0.29% (85 runs sampled)
complexObject_10items x 32,239 ops/sec ±0.50% (87 runs sampled)
complexObject_100items x 3,012 ops/sec ±0.41% (85 runs sampled)
set x 1,019,424 ops/sec ±0.45% (87 runs sampled)
map x 386,757 ops/sec ±0.37% (86 runs sampled)
```
