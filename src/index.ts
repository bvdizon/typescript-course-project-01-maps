import { Company } from './Company';
import { User } from './User';
import { CustomMap } from './CustomMap';

const customMap = new CustomMap('map');

const company1 = new Company();
const company2 = new Company();
const company3 = new Company();

const user1 = new User();
const user2 = new User();
const user3 = new User();

customMap.addMarker(company1);
customMap.addMarker(company2);
customMap.addMarker(company3);

customMap.addMarker(user1);
customMap.addMarker(user2);
customMap.addMarker(user3);

// customMap.addMarker({ location: { lat: 15, lng: 15 } });
