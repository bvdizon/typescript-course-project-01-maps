import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  // Typescript annotations
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  // Fields initialization
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
