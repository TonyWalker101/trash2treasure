import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React from "react";
import { useState, useEffect } from "react";
import mapStyles from "../../mapStyles";
import axios from 'axios';

const containerStyle = {
  width: '50vw',
  height: '91vh'
};

const center = {
  lat: 43.7634265770235,
  lng: -79.4791636979037
};

const AddNewMap = () => {

  const [state, setState] = useState([])

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/")
    ])
    .then((e) => setState(e[0].data))
    .catch((error) => console.log(`Error loading API data. Error: ${error}`));
  }, []);

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAy1SXOH3JNtfc-VbNZ3-OX0iAGctZ0hls"
  })

  const markerLocations = state.map(marker => {
    return <Marker position={{lat: (marker.latitude)*1, lng: (marker.longitude)*1}}/>
  })

  // const [map, setMap] = React.useState(null)

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  const options = {
    styles: mapStyles, 
    disableDefaultUI: true,
    zoomControl: true,
  }

  console.log("marker locations", markerLocations);

  return isLoaded ?(
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
        options={options}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
        {markerLocations}
        <></>
      </GoogleMap>    
  ) : <></>
}

export default AddNewMap;