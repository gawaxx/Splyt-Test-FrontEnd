import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { API, API_LINK } from './Adapters/API'

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {

  componentDidMount() {
    API.GetAPI(API_LINK).then( data => console.log(data) )
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        // key={'AIzaSyBZ8NP6GercRjUxWDD8ugWLYsHDY-7DGL4'}
        style={mapStyles}
        initialCenter={{
         lat: 51.5049375,
         lng: -0.0964509
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBZ8NP6GercRjUxWDD8ugWLYsHDY-7DGL4'
})(MapContainer);