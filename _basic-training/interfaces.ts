// Defining an interface
interface Reportable {
  summary(): string;
}

// Using the interface
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// Dummy Objects to pass
const oldCivic = {
  name: 'honda civic',
  year: new Date('2000'),
  broken: true,
  summary(): string {
    return `My ${this.name} year model is ${this.year.getFullYear()} is ${
      this.broken
    }`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink is color ${this.color} and is ${
      this.carbonated ? 'carbonated' : 'not carbonated'
    }.`;
  },
};

// Calling the function and passing the object
printSummary(oldCivic);
printSummary(drink);
