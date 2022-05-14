import SearchHeader from "../components/layout/SearchHeader";
import SearchResultMap from "../components/SearchResult/SearchResultMap";
import ResultList from "../components/SearchResult/ResultList";
import "../stylesheet/SearchResult.css";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchResult = () => {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/")
    ])
    .then((e) => setResults(e[0].data))
    .catch((error) => console.log(`Error loading API data. Error: ${error}`));
  }, []);

  return(
    <div>
      <SearchHeader />
      <SearchResultMap listData={results} setMarkers={setMarkers} setSelected={setSelected} markers={markers} selected={selected}/>
      <ResultList listData={results} selected={selected}/>
    </div>
  )
}

export default SearchResult;