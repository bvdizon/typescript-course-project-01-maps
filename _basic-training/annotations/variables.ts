let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in Objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Classes
class Car {
  // properties
}
let car: Car = new Car();

// Object literals
let points: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use Annotations
// 1. Function that returns the any type
//    * JSON.parse() returns a value of type "any"
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2. When we declare a variable on one line and init later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i <= words.length; i++) {
  if (words[1] === 'green') {
    foundWord = true;
  }
}

// 3. When a function returns the 'any' type ane we need to clarify the value
// Variable whose type cannot be inferred correctly
let nums = [-10, -20, 1, 30];
let numAboveZero: boolean | number = false;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 0) {
    numAboveZero = true;
  }
}
