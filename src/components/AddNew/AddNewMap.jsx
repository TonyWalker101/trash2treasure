import { GoogleMap, useJsApiLoader, LoadScript, Marker } from '@react-google-maps/api';
import React from "react";
import mapStyles from "../../mapStyles";

const containerStyle = {
  width: '50vw',
  height: '91vh'
};

const center = {
  lat: 43.6532,
  lng: -79.3832
};

const AddNewMap = (props) => {

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onMapClick = React.useCallback((e) => {
    props.setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const options = {
    styles: mapStyles, 
    disableDefaultUI: true,
    zoomControl: true,
  }

  return isLoaded ?(
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        // onLoad={onLoad}
        onUnmount={onUnmount}
        options={options}
        onClick={(e) => props.onClick(e)}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker 
          position={props.marker} 
          icon=
            {{
            url: "../../images/location-dot-solid.svg",
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(25, 25),
            scaledSize: new window.google.maps.Size(50, 50)
            }}
          />
        <></>
      </GoogleMap>    
  ) : <></>
}

export default AddNewMap;