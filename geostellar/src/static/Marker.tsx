import React from 'react';
import Popup from "reactjs-popup";
import SplitPane from 'react-split-pane';
import './Marker.css';
import { imageListClasses } from '@mui/material';  
import Button from '@mui/material/Button';
import theme from '../theme'
import { css } from "@emotion/react"

const Marker = (props: any) => {
    const { color, name, id, lat, lng, desc, img} = props;

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

    const logo = require('../static/img/' + img)

    console.log(logo)
    
    return (
      <div>
        {/* <div className="heatmap"> */}
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
      <div className="modal" style={{ fontFamily: 'IBM Plex Sans'}}>
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> {name} </div>
        <SplitPane split="vertical" allowResize={false}>
          <div className="content" style ={{padding: '50px 0px', display: 'flex', justifyContent: 'center'}}> 
            <img src={logo} style = {{width: '200px', height:'200px'}}/><img></img>
          </div>
          <div className="content" style={{padding: '50px 0px', display: 'flex', justifyContent: 'center'}}>or you can use a plain old div</div>

        </SplitPane>
        
        <div className="actions">
        
          <Button variant="outlined"
              className="button" style={{borderColor: '#3E1BDB', marginRight: '20px'}}
              onClick={() => {
                console.log('function 1 button');
              }}>
              5 XLM
          </Button>
        
            
          <Button variant="outlined"
              className="button" style={{borderColor: '#3E1BDB', marginLeft: '40px'}}
              onClick={() => {
                console.log('function 2 button');
              }}>
              function 2
          </Button>

        </div>
      </div>
    )}
  </Popup>
);
      </div>
      // </div>
      
      
    );
  };

  export default Marker;