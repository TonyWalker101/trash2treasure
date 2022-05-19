import { GoogleMap, useJsApiLoader, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import React from "react";
import mapStyles from "../../mapStyles";
import ReactTimeAgo from 'react-time-ago'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { Typography } from '@mui/material';

const containerStyle = {
  width: '50vw',
  height: '91vh'
};

const SearchResultMap = (props) => {

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(props.center);
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

  const listData = props.listData;

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

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={props.center}
      zoom={13}
      onUnmount={onUnmount}
      options={options}
    >
       { listData.map((marker) => {
        return(
        <Marker
          key={marker.id}
          position={{ lat: Number(marker.latitude), lng: Number(marker.longitude) }}
          onClick={() => {props.setSelected({lat: Number(marker.latitude), lng:Number(marker.longitude), title: marker.name, created_at: marker.created_at, id: marker.id });

          document.getElementById(`list-container`).scrollTop = document.getElementById(`item-id-${marker.id}`).offsetTop
        }}
          icon={{
            url: "../../images/location-dot-solid.svg",
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(25, 25),
            scaledSize: new window.google.maps.Size(50, 50)
          }}
        />
        )
      })}

      {/* Select pin shows infowindow */}
      {props.selected ? (
        <InfoWindow
            position={{ lat: props.selected.lat, lng: props.selected.lng }}
            onCloseClick={() => {
              props.setSelected(null);
            }}
            className="info-window"
          >
            <ThemeProvider theme={theme}>
              <div>
                <Typography variant="infoWindow">
                  {props.selected.title}
                </Typography>
                <p>Posted <ReactTimeAgo date={Date.parse(props.selected.created_at)} locale="en-US"/></p>
              </div>
            </ThemeProvider>
          </InfoWindow>
        ) : null}
    </GoogleMap>
  ) : <></>
}

export default SearchResultMap;