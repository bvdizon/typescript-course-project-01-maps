class Vehicle {
  // Shortcut for declaring fields
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive() {
    console.log('vroom vroom');
  }

  public startDrive() {
    this.drive();
  }

  public startHonk() {
    this.honk();
  }
}

// Creating instances
const vehicle = new Vehicle('orange');
console.log(`From vehicle: ${vehicle.color}`);

const car = new Car(4, 'green');
console.log(`From car: ${car.color}`);
car.startDrive();
car.startHonk();
