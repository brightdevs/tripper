import React from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import { ILocation } from '../interfaces';
type Props = {
  locations: ILocation[];
};

const Map = ({ locations }: Props) => {
  console.log('number of location', locations.length);

  return (
    <div>
      <MapContainer
        center={[46.096598, -64.7553345]}
        zoom={11}
        scrollWheelZoom={false}
        style={{ width: '100&' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {locations &&
          locations.slice(0, 10).map((location) => {
            return (
              <Marker
                key={location.id}
                position={[location.latitude, location.longitude]}
              >
                <Popup>{location.name}</Popup>
              </Marker>
            );
          })}
      </MapContainer>
    </div>
  );
};

function LocationMarker() {
  const [position, setPosition] = React.useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      console.log('locationfound', e.latlng);

      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
export default Map;

{
  /* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <LocationMarker />
        */
}
