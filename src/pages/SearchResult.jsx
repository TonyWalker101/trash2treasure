import SearchHeader from "../components/layout/SearchHeader";
import SearchResultMap from "../components/SearchResult/SearchResultMap";
import ResultList from "../components/SearchResult/ResultList";
import "../stylesheet/SearchResult.css";

import DetailsModal from "../components/SearchResult/DetailsModal";
import { useEffect, useState } from "react";
import axios from "axios";
import CongratsModal from "../components/SearchResult/ComgratsModal";
import { BrowserRouter as Router, Routes, Route, Switch, Link, Redirect, useLocation } from "react-router-dom"

const test = [{
  id: 1,
  created_at: "2022-05-10T10:26:02.000Z",
  updated_at: "2022-05-13T02:22:49.484Z",
  user_id: 1,
  name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  location: "Eum non autem quod.",
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  condition: "Acceptable",
  available: true,
  latitude: "43.6972935947595",
  longitude: "-79.4040332094641",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  }];


const SearchResult = (props) => {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [modal, setModal] = useState(null);

  const [results, setResults] = useState({comments: [], listData: [], users: [], center: {lat: 43.6532, lng: -79.3832}});
  const [congrats, setCongrats] = useState(false);

  const location = useLocation();
  console.log("## location state", location.state);

  const updateStateFromSearch = data => {
    setResults(prev => (
      {...prev, 
      listData: data.results, 
      center: {
        lat: data.geocode[0] || 43.6532, 
        lng: data.geocode[1] || -79.3832}
      }
    ));
    // console.log("## State changed in Search Results page:", data);

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

      <SearchHeader onChange={(data) => updateStateFromSearch(data)} resultState={results?.listData || []}/>
      <SearchResultMap listData={results?.listData || []} setMarkers={setMarkers} setSelected={setSelected} markers={markers} selected={selected} center={results.center}/>

      <ResultList listData={results?.listData || []} selected={selected} setModal={setModal}/>
      {congrats && 
        <CongratsModal congrats={congrats} setCongrats={setCongrats} setModal={setModal}/>
      }
      <DetailsModal listData={results?.listData || []} modal={modal} setModal={setModal} users={results.users} comments={results.comments} setResults={setResults} setCongrats={setCongrats}/>
      
    </div>
  )
}

export default SearchResult;