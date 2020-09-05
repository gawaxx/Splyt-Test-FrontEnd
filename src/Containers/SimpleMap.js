import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Components/Marker'

const SimpleMap = (props) => {
    const [center] = useState({lat: 51.5049375, lng: -0.0964509 });
    const [zoom] = useState(14);
    return (
        <div style={{ height: '95vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBZ8NP6GercRjUxWDD8ugWLYsHDY-7DGL4' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >

          {
            props.drivers.map(driver =>
              <Marker
                lat={driver.location.latitude}
                lng={driver.location.longitude}
                name={driver.driver_id}
                color="blue"
                key={driver.driver_id}
              />
            )
          }

        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;