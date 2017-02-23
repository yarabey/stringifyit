# stringifyit
Fast node.js stringify library with sorting and typing. Provides [Stringifier](#Stringifier) class. [Stringifier](#Stringifier) provides [stringify Symbol](#stringifierstringify--symbol) to allow you [customize](#stringifierstringifycallback--function) stringifying your own classes.

See [benchmarks](#benchmarks) for compare to other libs.

# Install
`npm i stringifyit --save`

# Features

- Supports node.js >= 4.0.0
- Supports Map/WeakMap, Set/WeakSet and typed arrays
- Supports sort Set, Map, object keys and optional sort arrays
- Supports custom stringify rules for user-defined classes
- Useful for browsers
- Very fast stringify library

# API

{{>main}}

## Custom stringifiers [source](stringifiers)

### Object.prototype[[stringify](#Stringifier..stringify)] : <code>[stringifyCallback](#Stringifier..stringifyCallback)</code>
### Array.prototype[[stringify](#Stringifier..stringify)] : <code>[stringifyCallback](#Stringifier..stringifyCallback)</code>
### TypedArray.prototype[[stringify](#Stringifier..stringify)] : <code>[stringifyCallback](#Stringifier..stringifyCallback)</code>
### Map.prototype[[stringify](#Stringifier..stringify)] : <code>[stringifyCallback](#Stringifier..stringifyCallback)</code>
### WeakMap.prototype[[stringify](#Stringifier..stringify)] : <code>[stringifyCallback](#Stringifier..stringifyCallback)</code>
### Set.prototype[[stringify](#Stringifier..stringify)] : <code>[stringifyCallback](#Stringifier..stringifyCallback)</code>
### WeakSet.prototype[[stringify](#Stringifier..stringify)] : <code>[stringifyCallback](#Stringifier..stringifyCallback)</code>
### Date.prototype[[stringify](#Stringifier..stringify)] : <code>[stringifyCallback](#Stringifier..stringifyCallback)</code>

# Benchmarks

Benchmarked with Node.js v6.9.5

## Usage

* `npm run bench` to run benchmarking stringifyit operations/second for different cases

## Results

```
array x 1,947,707 ops/sec ±1.60% (85 runs sampled)
object x 2,366,530 ops/sec ±1.30% (89 runs sampled)
nestedObject x 29,384 ops/sec ±1.48% (87 runs sampled)
complexObject_5items x 35,847 ops/sec ±1.87% (87 runs sampled)
complexObject_10items x 18,407 ops/sec ±2.03% (87 runs sampled)
complexObject_100items x 1,682 ops/sec ±2.09% (85 runs sampled)
set x 215,921 ops/sec ±2.52% (84 runs sampled)
map x 190,451 ops/sec ±2.57% (84 runs sampled)
```


# License
MIT
