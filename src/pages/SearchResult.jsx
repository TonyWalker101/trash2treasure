import AddMapDonations from "../components/AddNew/AddMapDonations";
import SearchHeader from "../components/layout/SearchHeader";
import TreasureList from "../components/Treasures/TreasureList";

const SearchResult = () => {
  return(
    <div>
      <SearchHeader />
      <h1>Search Result</h1>
      <AddMapDonations/>
      <TreasureList/>
    </div>
  )
}

export default SearchResult;