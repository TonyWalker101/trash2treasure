import SearchHeader from "../components/layout/SearchHeader";
import SearchResultMap from "../components/SearchResult/SearchResultMap";
import ResultList from "../components/SearchResult/ResultList";
import "../stylesheet/SearchResult.css";
import DetailsModal from "../components/SearchResult/DetailsModal";
import { useEffect, useState } from "react";
import axios from "axios";
import CongratsModal from "../components/SearchResult/ComgratsModal";
import Empty from "../components/SearchResult/Empty";
import Loading from "../components/SearchResult/Loading";
import { BrowserRouter as Router, Routes, Route, Switch, Link, Redirect, useLocation, useNavigate } from "react-router-dom"
import findNewItem from "../helpers/findNewItem";

const SearchResult = (props) => {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [modal, setModal] = useState(null);

  const [results, setResults] = useState({comments: [], listData: [], users: [], center: {lat: 43.6532, lng: -79.3832}});
  const [congrats, setCongrats] = useState(false);
  const [loading, setLoading] = useState(true)

  // location receives state from /add-new
  const location = useLocation();
  const navigate = useNavigate();

  const updateStateFromSearch = data => {
    setResults(prev => (
      {...prev, 
      listData: data.results, 
      center: {
        lat: data.geocode[0] || 43.6532, 
        lng: data.geocode[1] || -79.3832}
      }
    ));
  }

  //set loading page
  const timeId = setTimeout(() => {
    // After 3 seconds set the show value to false
    setLoading(false)
  }, 1000)

  useEffect(() => {
    //show loading page for 1s
    clearTimeout(timeId)

    if(props.indexSearch.location!==""||props.indexSearch.item!==""){
      return
    }

    Promise.all([
      axios.get("http://localhost:3001/"),
      axios.get("http://localhost:3001/comments"), 
      axios.get("http://localhost:3001/users")
    ])
    .then((all) => {
      if (location.state) {
        const newItem = findNewItem(location.state, all[0].data)

          //resets location.state
        navigate(location.state, {});

        return setResults(
          prev => ({...prev, listData: newItem,
            comments:all[1].data, users: all[2].data, center: {lat: newItem[0].latitude*1, lng: newItem[0].longitude*1}
          }))
      } else {
        return setResults(
        prev => ({...prev, listData: all[0].data,
          comments:all[1].data, users: all[2].data
        }))
      }
    })
    .catch((error) => console.log(`Error loading API data. Error: ${error}`))
  }, [])

  return(
    <div>

      <SearchHeader setSelected={setSelected} setLoading={setLoading} indexSearch={props.indexSearch} setIndexSearch={props.setIndexSearch} onChange={(data) => updateStateFromSearch(data)} resultState={results?.listData || []}/>
      <SearchResultMap listData={results?.listData || []} setMarkers={setMarkers} setSelected={setSelected} markers={markers} selected={selected} center={results.center}/>

      {loading && <Loading />}
      {results.listData.length !== 0 ?
        <ResultList listData={results?.listData || []} selected={selected} setModal={setModal}/>
        :
        <Empty />
      }

      {congrats && 
        <CongratsModal congrats={congrats} setCongrats={setCongrats} setModal={setModal}/>
      }

      <DetailsModal listData={results?.listData || []} modal={modal} setModal={setModal} users={results.users} comments={results.comments} setResults={setResults} setCongrats={setCongrats} setSelected={setSelected}/>
      
    </div>
  )
}

export default SearchResult;