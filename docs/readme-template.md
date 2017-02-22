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
array x 1,679,915 ops/sec ±4.25% (80 runs sampled)
object x 2,152,083 ops/sec ±3.65% (82 runs sampled)
nestedObject x 27,446 ops/sec ±2.79% (83 runs sampled)
complexObject_5items x 32,950 ops/sec ±2.53% (83 runs sampled)
complexObject_10items x 16,690 ops/sec ±2.42% (81 runs sampled)
complexObject_100items x 1,499 ops/sec ±2.59% (81 runs sampled)
set x 197,390 ops/sec ±2.15% (80 runs sampled)
map x 181,180 ops/sec ±2.08% (82 runs sampled)
```


# License
MIT
