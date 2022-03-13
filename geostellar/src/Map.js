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
      const goldenGateSightCords = {"lat" : 37.80841, "long" : -122.47505}
      const ferryBuildingSightCords = {"lat" : 37.79512, "long" : -122.39380}
      const sfCityHallSightCords = {"lat" : 37.77938, "long" : -122.41839}
      const alcatrazIslandSightCords = {"lat" : 37.82673, "long" : -122.42307}
      const dixieFireMonsterCords = {"lat" : 40.08915, "long" : -121.24296}

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

          <Marker
            lat= {deforestationMonsterCords["lat"]}
            lng= {deforestationMonsterCords["long"]}
            name="Deforestation Monster"
            color="red"
          />

          <Marker
            lat= {dixieFireMonsterCords["lat"]}
            lng= {dixieFireMonsterCords["long"]}
            name="Dixie Wildfire Monster"
            color="red"
          />

          <Marker
            lat= {goldenGateSightCords["lat"]}
            lng= {goldenGateSightCords["long"]}
            name="The Golden Gate Bridge"
            color="green"
          />
          
          <Marker
            lat= {ferryBuildingSightCords["lat"]}
            lng= {ferryBuildingSightCords["long"]}
            name="The Ferry Building"
            color="green"
          />

          <Marker
            lat= {sfCityHallSightCords["lat"]}
            lng= {sfCityHallSightCords["long"]}
            name="San Francisco City Hall"
            color="green"
          />
          
          <Marker
            lat= {alcatrazIslandSightCords["lat"]}
            lng= {alcatrazIslandSightCords["long"]}
            name="Alcatraz Island"
            color="green"
          />

          </GoogleMapReact>
        </div>
      );
    }
  }
  
  export default SimpleMap;