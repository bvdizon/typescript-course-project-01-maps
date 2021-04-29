const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// The order of values in a tuple is critical.
// Tuples define a specific order and set of records.
// Adding annotation like below will make an array a tuple.
const pepsi: [string, boolean, number] = ['brown', true, 40];

// Alternate way: using Type Alias
type Drink = [string, boolean, number];
const royal: Drink = ['yellow', true, 50];
