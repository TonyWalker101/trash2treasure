import AddMapDonations from "../components/AddNew/AddMapDonations";
import SearchHeader from "../components/layout/SearchHeader";
import SearchResultMap from "../components/SearchResult/SearchResultMap";
import ResultList from "../components/SearchResult/ResultList";
import "../stylesheet/SearchResult.css";
import listData from "../__mocks__/list";
import { useState } from "react";

const SearchResult = () => {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  // console.log(selected.id);

  return(
    <div>
      <SearchHeader />
      <SearchResultMap listData={listData} setMarkers={setMarkers} setSelected={setSelected} markers={markers} selected={selected}/>
      <ResultList listData={listData} selected={selected}/>
    </div>
  )
}

export default SearchResult;