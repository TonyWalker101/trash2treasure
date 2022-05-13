import AddNewMap from "../components/AddNew/AddNewMap";
import SearchHeader from "../components/layout/SearchHeader";
import TreasureList from "../components/Treasures/TreasureList";

const SearchResult = () => {
  return(
    <div>
      <SearchHeader />
      <h1>Search Result</h1>
      <AddNewMap/>
      <TreasureList/>
    </div>
  )
}

export default SearchResult;