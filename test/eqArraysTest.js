const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);
assertEqual(eqArrays([1, 2, 3], [1]), false);
assertEqual(eqArrays([], [1]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays("A","A"), true);
assertEqual(eqArrays(1), false);

assertEqual(eqArrays([1, [2 ,[3, 4]]], [1, [2 ,[3, 4]]]), true);
assertEqual(eqArrays([1, [2 , 3 , [3, 4]]], [1, [2 ,[3, 4]]]), false);

