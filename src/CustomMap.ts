// TS Interface; check the "addMarker" method
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  // TS annotatation; setting it to private
  private googleMap: google.maps.Map;

  constructor(divID: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divID), {
      zoom: 1,
      center: {
        lat: 14.74811,
        lng: 121.07592,
      },
    });
  }

  // TS annotation based on the "Mappable" interface
  addMarker(mappable: Mappable) {
    // create a marker
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    // attach an event to the marker --- note it is "addListener"
    // not "addEventListener" ( javascript )
    marker.addListener('click', () => {
      // create a new infoWindow
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      // calling the .open method from infoWindow instance
      infoWindow.open(this.googleMap, marker);
    });
  }
}
