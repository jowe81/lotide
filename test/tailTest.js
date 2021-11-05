const assertEqual = require('../assertEqual');
const tail = require('../tail');

console.log(assertEqual("Lighthouse,Labs", tail(["Hello", "Lighthouse", "Labs"]).join()));
console.log(assertEqual("3,4", tail([2, 3, 4]).join()));
console.log(assertEqual("3,March", tail([true, 3, "March"]).join()));
console.log(assertEqual("", tail(["single"]).join()));
console.log(assertEqual("", tail([]).join()));

//Test case for original array (this doesn't really show it's unmodified though - just that its length stayed the same)
const words = ["one", "two", "three"];
tail(words);
assertEqual(words.length, 3); //Only shows that the length of the array didn't change