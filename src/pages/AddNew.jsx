import SearchHeader from "../components/layout/SearchHeader";
import AddNewMap from "../components/AddNew/AddNewMap";
import AddNewForm from "../components/AddNew/AddNewForm";
import "../stylesheet/AddNew.css";

const AddNew = () => {

  return (
    <div>
      <SearchHeader />
      <AddNewMap />   
      <AddNewForm /> 
    </div>
  )
}

export default AddNew;