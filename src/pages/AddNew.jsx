import SearchHeader from "../components/layout/SearchHeader";
import AddNewMap from "../components/AddNew/AddNewMap";
import AddNewForm from "../components/AddNew/AddNewForm";
import "../stylesheet/AddNew.css";
import { useState } from "react";
import convertAddressToLink from "../helpers/getCoordinateByAddress"

const AddNew = () => {
  const [location, setLocation] = useState({
    address: '', 
    lat: "",
    log: "" 
  });

  return (
    <div>
      <SearchHeader />
      <AddNewMap />   
      <AddNewForm convertAddressToLink={convertAddressToLink} location={location} setLocation={setLocation}/> 
    </div>
  )
}

export default AddNew;