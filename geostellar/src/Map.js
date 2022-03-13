import GoogleMapReact from 'google-map-react';
import React from "react";
import Marker from './static/Marker.tsx';
import Position from './static/Position.tsx';
import geolib from 'geolib';

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
      const posCords = {"lat" : 37.7759, "long": -122.4245}
      const housingMonsterCords = {"lat" : 37.76085, "long" : -122.41814}

      function degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
      }
      
      function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
        var earthRadiusKm = 6371;
      
        var dLat = degreesToRadians(lat2-lat1);
        var dLon = degreesToRadians(lon2-lon1);
      
        lat1 = degreesToRadians(lat1);
        lat2 = degreesToRadians(lat2);
      
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        return earthRadiusKm * c;
      }

      return (

        <div style={{ height: '80vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyD2Hi_ftU2JKYazyhEHllr4xvvfezA_ZJU' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
          
          <Position
            lat= {posCords["lat"]}
            lng= {posCords["long"]}
            name="Current Location"
            color="blue"
          />
          
          <Marker
            lat= {housingMonsterCords["lat"]}
            lng= {housingMonsterCords["long"]}
            name="Housing Monster"
            color="red"
          />

          </GoogleMapReact>
        </div>
      );
    }
  }
  
  export default SimpleMap;