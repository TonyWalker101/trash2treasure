import HomeHeader from "../components/layout/HomeHeader";
import AddNewMap from "../components/AddNew/AddNewMap";
import AddNewForm from "../components/AddNew/AddNewForm";
import "../stylesheet/AddNew.css";
import { useState } from "react";
import convertAddressToLink from "../helpers/getCoordinateByAddress"
import CommentSection from "../components/SearchResult/CommentSection";

const AddNew = () => {
  const [location, setLocation] = useState({
    address: '', 
    lat: "",
    log: "" 
  });

  return (
    <div>
      <HomeHeader />
      <AddNewMap />   
      <AddNewForm convertAddressToLink={convertAddressToLink} location={location} setLocation={setLocation}/> 
    </div>
  )
}

export default AddNew;