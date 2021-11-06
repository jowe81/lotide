# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jowe81/lotide`

**Require it:**

`const _ = require('@jowe81/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: returns an object with a key for each character, the value indicating the frequency of character in `string`
* `countOnly(array, settings)`: returns an object indicating how many times each array item indicated in `settings` occurs in `array`
* `eqArrays(array1, array2)`: returns true if `array1` and `array2` are deeply equal
* `eqObjects(object1, object2)`: returns true if `object1` and `object2` are deeply equal
* `findKey(object, callback(item))`: returns the first key from `object` whose value matches the condition expressed in `callback`
* `findKeyByValue(object, value)`: returns the first key from `object` whose value matches `value`
* `flatten(array)`: returns a flattened version of `array` (nesting allowed)
* `head(array)`: returns the first element of `array` or the empty array
* `letterPositions(string)`: returns an object indicating for each letter in `string` where it occurs
* `map(array,callback)`: executes `callback` on each element of `array` and returns an array with the result
* `middle(array)`: returns the middle element(s) of `array`, or the empty array
* `tail(array)`: returns a copy of `array` without its first element, or the empty array
* `takeUntil(array, callback)`: returns the first part of `array` until and excluding the first element that satisfies the condition expressed in `callback`
* `withOut(array, array2)`: returns a copy of `array` that does not contain elements from `array2` 