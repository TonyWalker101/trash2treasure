import "../../stylesheet/DisplayMap.css"
import {React, useState } from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api"

const center = { lat: -34.397, lng: 150.644 };
const zoom = 8;

// the below takes the measurements from the parent container
const containerStyle = { width: "500px", height: "500px" };

const mapOptions = {
  zoomControl: false,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false
};

function DisplayMap() {
  
  const {isLoaded} = useJsApiLoader({
    // id: "google-map-script",
    // googleMapsApiKey: API KEY in env.local
  })

  if (!isLoaded) {
    return <h2>API has not loaded</h2>
  }

  // MAY USE LATER TO IMPLEMENT STATE

  // const [map, setMap] = React.useState(null)

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  return (
    <div id="map">
      <GoogleMap 
      center={center} 
      zoom={zoom} 
      mapContainerStyle={containerStyle}
      options={mapOptions}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
      >
        <Marker position={center}/>
      </GoogleMap>
    </div>
  )
}

export default DisplayMap