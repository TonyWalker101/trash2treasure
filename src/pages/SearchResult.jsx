import SearchHeader from "../components/layout/SearchHeader";
import DisplayMap from "../components/layout/DisplayMap";
import TreasureList from "../components/layout/TreasureList";

const SearchResult = () => {


  return(
    <div>
      <SearchHeader />
      {/* <h1>Search Result</h1> */}
      <DisplayMap />
      <TreasureList />
    </div>
  )
}

export default SearchResult;