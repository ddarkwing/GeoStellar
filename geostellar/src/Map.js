import GoogleMapReact from 'google-map-react';
import React from "react";
<<<<<<< HEAD
import Marker from './static/Marker.tsx';
=======
import Marker from './Marker/Marker.tsx';
>>>>>>> mikey

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends React.Component {
    static defaultProps = {
      center: {
        lat: 37.7759,
        lng: -122.4245
      },
      zoom: 13
    };
  
    render() {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '80vh', width: '80%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyD2Hi_ftU2JKYazyhEHllr4xvvfezA_ZJU' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
<<<<<<< HEAD
          
=======
>>>>>>> mikey
          <Marker
            lat={37.7759}
            lng={-122.4245}
            name="Current Location"
            color="blue"
          />
          </GoogleMapReact>
        </div>
      );
    }
  }
  
  export default SimpleMap;