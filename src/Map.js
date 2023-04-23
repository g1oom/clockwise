import React, { useEffect, Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import App from './App';


const mapStyles = {
    width: '100%',
    height: '100%'
  };
  
  function Map(props) {
    return (
      <div>
        <Map
          google={props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
           lat: 37.7749,
           lng: -122.4194
          }}
        />
      </div>
    );
  }
  
  export default Map;

  