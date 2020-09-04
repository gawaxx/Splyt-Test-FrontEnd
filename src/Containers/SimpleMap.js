import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Components/Marker'

const SimpleMap = (props) => {
    const [center, setCenter] = useState({lat: 51.5049375, lng: -0.0964509 });
    const [zoom, setZoom] = useState(11);
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBZ8NP6GercRjUxWDD8ugWLYsHDY-7DGL4' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={51.5049375}
            lng={-0.0964509}
            name="My Marker"
            color="blue"
          />

        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;