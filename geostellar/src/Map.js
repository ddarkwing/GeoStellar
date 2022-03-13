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
      const deforestationMonsterCords = {"lat" : -2.81395, "long" : -62.39341}
      const housingMonsterCords = {"lat" : 37.76085, "long" : -122.41814}
      const housingMonsterCords = {"lat" : 37.76085, "long" : -122.41814}
      const housingMonsterCords = {"lat" : 37.76085, "long" : -122.41814}
      const housingMonsterCords = {"lat" : 37.76085, "long" : -122.41814}
      const housingMonsterCords = {"lat" : 37.76085, "long" : -122.41814}

      function degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
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