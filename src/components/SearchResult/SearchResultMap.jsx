import { GoogleMap, useJsApiLoader,LoadScript } from '@react-google-maps/api';
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

const SearchResultMap = () => {

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = React.useState(null)

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
        onUnmount={onUnmount}
        options={options}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>    
  ) : <></>
}

export default SearchResultMap;