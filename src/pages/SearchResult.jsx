import SearchHeader from "../components/layout/SearchHeader";
import SearchResultMap from "../components/SearchResult/SearchResultMap";
import ResultList from "../components/SearchResult/ResultList";
import "../stylesheet/SearchResult.css";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchResult = () => {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [results, setResults] = useState({comments: [], listData: []});

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/"),
      axios.get("http://localhost:3001/comments")
    ])
    .then((all) => setResults(
      prev => ({...prev, listData:all[0].data,
        comments:all[1].data
      })
    ))
    .catch((error) => console.log(`Error loading API data. Error: ${error}`));
  }, []);

  return(
    <div>
      <SearchHeader />
      <SearchResultMap listData={results.listData} setMarkers={setMarkers} setSelected={setSelected} markers={markers} selected={selected}/>
      <ResultList listData={results.listData} selected={selected}/>
    </div>
  )
}

export default SearchResult;