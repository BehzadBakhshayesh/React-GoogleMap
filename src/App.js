import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const App = ({google}) => {
 

  return (
    <div>
      <Map
          google={google}
          zoom={8}
          style={{width:'100%', height:'100%'}}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
         <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: 'TOKEN HERE'
})(App);

