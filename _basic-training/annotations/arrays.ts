// Type value will be string[]
const carMakers1: string[] = ['ford', 'toyota', 'chevy'];
const carMakers2 = ['ford', 'toyota', 'chevy'];

// Type value will be any[]
const carMakers3 = [];

// Type value will be Date[]
const dates = [new Date(), new Date()];

// Type value will be string[][] --- multidimensional array
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car = carMakers1[0];
const myCar = carMakers1.pop();

// Prevent incompatible values; this will prompt an error
carMakers2.push(100);

// Help with 'map'
carMakers1.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2021-04-27'); // good to add as this is a string
importantDates.push(new Date()); // good to add as this is a Date
importantDates.push(100); // invalid type
