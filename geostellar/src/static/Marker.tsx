import React from 'react';
import Popup from "reactjs-popup";
import './Marker.css';

const Marker = (props: any) => {
    const { color, name, id, lat, lng } = props;

    function degreesToRadians(degrees) {
      return degrees * Math.PI / 180;
    }

    function distanceInMilesBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
      var earthRadiusKm = 6371;
    
      var dLat = degreesToRadians(lat2-lat1);
      var dLon = degreesToRadians(lon2-lon1);
    
      lat1 = degreesToRadians(lat1);
      lat2 = degreesToRadians(lat2);
    
      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      return earthRadiusKm * c * 0.6213712;
    }

    const dis = distanceInMilesBetweenEarthCoordinates(lat, lng, 37.7759, -122.41814)

    return (
      <div>
        <Popup
    trigger={<div className="marker"
    style={{ backgroundColor: color, cursor: 'pointer', fontSize: '25px'}}
    title={"Distance: " + dis.toString().substring(0, dis.toString().indexOf(".")+3) + " miles"} 
    onMouseEnter={() => console.log(dis)}
  >      </div>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Modal Title </div>
        <div className="content">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="actions">
        
          <button
              className="button"
              onClick={() => {
                console.log('function 1 button');
              }}
            >
              function 1
          </button>
            
          <button
              className="button"
              onClick={() => {
                console.log('function 2 button');
              }}
            >
              function 2
          </button>

        </div>
      </div>
    )}
  </Popup>
);
      </div>
      
      
    );
  };

  export default Marker;