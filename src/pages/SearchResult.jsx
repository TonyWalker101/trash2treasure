import SearchHeader from "../components/layout/SearchHeader";
import SearchResultMap from "../components/SearchResult/SearchResultMap";
import ResultList from "../components/SearchResult/ResultList";
import "../stylesheet/SearchResult.css";
import listData from "../__mocks__/list";
import { useState } from "react";
import DetailsModal from "../components/SearchResult/DetailsModal";

const SearchResult = () => {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [modal, setModal] = useState(null);

  return(
    <div>
      <SearchHeader />
      <SearchResultMap listData={listData} setMarkers={setMarkers} setSelected={setSelected} markers={markers} selected={selected}/>
      <ResultList listData={listData} selected={selected} modal={modal} setModal={setModal}/>
      <DetailsModal modal={modal} setModal={setModal} listData={listData}/>
    </div>
  )
}

export default SearchResult;