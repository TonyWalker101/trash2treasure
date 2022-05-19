import SearchHeader from "../components/layout/SearchHeader";
import AddNewMap from "../components/AddNew/AddNewMap";
import AddNewForm from "../components/AddNew/AddNewForm";
import "../stylesheet/AddNew.css";
import { useEffect, useState } from "react";
import convertAddressToLink from "../helpers/getCoordinateByAddress"
import CommentSection from "../components/SearchResult/CommentSection";
import getAddress from "../helpers/getAddress"

const AddNew = () => {
  const [location, setLocation] = useState({
    address: "", 
    lat: "",
    log: "" 
  });

  const [marker, setMarker] = useState({
    lat: null,
    lng: null}
    )
    
    const handleClick = event => {

      setMarker({lat: event.latLng.lat(), lng: event.latLng.lng()});

      const geocode = {lat: event.latLng.lat(), lng: event.latLng.lng()}

      //gets address from latitude/longitude from Google Maps click
      getAddress(geocode)
      .then((data) => {
        return setLocation({address: data})
      })
    }
  
  return (
    <div>
      <SearchHeader />
      <AddNewMap marker={marker} onClick={(e) => handleClick(e)}/>   
      <AddNewForm convertAddressToLink={convertAddressToLink} location={location} setLocation={setLocation}/> 
    </div>
  )
}

export default AddNew;