import SearchHeader from "../components/layout/SearchHeader";
import SearchResultMap from "../components/SearchResult/SearchResultMap";
import ResultList from "../components/SearchResult/ResultList";
import "../stylesheet/SearchResult.css";

import DetailsModal from "../components/SearchResult/DetailsModal";
import { useEffect, useState } from "react";
import axios from "axios";
import CongratsModal from "../components/SearchResult/ComgratsModal";


const SearchResult = () => {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [modal, setModal] = useState(null);
  const [results, setResults] = useState({comments: [], listData: [], users: []});
  const [congrats, setCongrats] = useState(false);

  const updateStateFromSearch = data => {
    setResults(prev => ({...prev, listData: data}));
    console.log("## State changed in Search Results page");
  }

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/"),
      axios.get("http://localhost:3001/comments"), 
      axios.get("http://localhost:3001/users")
    ])
    .then((all) => setResults(
      prev => ({...prev, listData:all[0].data,
        comments:all[1].data, users: all[2].data
      })
    ))
    .catch((error) => console.log(`Error loading API data. Error: ${error}`));
  }, []);

  return(
    <div>
      <SearchHeader onChange={(event) => updateStateFromSearch(event)} resultState={results?.listData || []}/>
      <SearchResultMap listData={results?.listData || []} setMarkers={setMarkers} setSelected={setSelected} markers={markers} selected={selected}/>
      <ResultList listData={results?.listData || []} selected={selected} setModal={setModal}/>
      {congrats && 
        <CongratsModal congrats={congrats} setCongrats={setCongrats} setModal={setModal}/>
      }
      <DetailsModal listData={results?.listData || []} modal={modal} setModal={setModal} users={results.users} comments={results.comments} setResults={setResults} setCongrats={setCongrats}/>
      
    </div>
  )
}

export default SearchResult;