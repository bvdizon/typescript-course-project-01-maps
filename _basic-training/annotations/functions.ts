// Annotate every single argument, and the return value
const add = (a: number, b: number): number => {
  return a + b;
};

// Annotations for anonymous functions
function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// Void - not returning anything
const logger = (message: string): void => {
  console.log(message);
};

// Never - not return anything at all
const throwError = (message: string): never => {
  throw new Error(message);
};

// Possibly return something
const throwAnother = (message: string): string => {
  if (!message) throw new Error(message);
  return message;
};

// Possibly not return anything
const throwOneMore = (message: string): void => {
  if (!message) throw new Error(message);
};

// Destructuring with Annotations
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

/*
 * Without destructuring: 

    const logWeather = (forecast: { date: Date; weather: string }): void => {
        console.log(forecast.date);
        console.log(forecast.weather);
    };

*/
