import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  // TS annotations
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  // Initializations for fields ( values )
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h2>${this.companyName}</h2>
        <small>${this.catchPhrase}</small>
      </div>      
    `;
  }
}
