import React, { Component } from 'react';
import './App.css';
import SimpleMap from './Containers/SimpleMap';
import { API, API_LINK } from './Adapters/API'

class App extends Component {

  state = {
    drivers: []
  }

  componentDidMount() {
    API.GetAPI(API_LINK).then( data => this.setState( {drivers: data.drivers} ) )
  }

  render() {
    return (
      <div className="App">
        <SimpleMap drivers={this.state.drivers} />
      </div>
    );
  }
}

export default App;



// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
// import { API, API_LINK } from './Adapters/API'

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

// export class MapContainer extends Component {

//   state = {
//     showingInfoWindow: false,  //Hides or the shows the infoWindow
//     activeMarker: {},          //Shows the active marker upon click
//     selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
//     drivers: []
//   };

//   componentDidMount() {
//     API.GetAPI(API_LINK).then( drivers => this.setState( drivers.drivers ) )
//   }

//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         // key={'AIzaSyBZ8NP6GercRjUxWDD8ugWLYsHDY-7DGL4'}
//         style={mapStyles}
//         initialCenter={{
//          lat: 51.5049375,
//          lng: -0.0964509
//         }}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBZ8NP6GercRjUxWDD8ugWLYsHDY-7DGL4'
// })(MapContainer);