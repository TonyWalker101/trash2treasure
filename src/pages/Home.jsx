import HomeHeader from "../components/layout/HomeHeader";
import { Fragment } from "react";
import "../stylesheet/Nav.css";
import "../stylesheet/Home.css";
import Footer from "../components/layout/Footer";
import { useState, useEffect } from "react";
import HomeSearchBar from "../components/Home/HomeSearchBar";
import AboutUs from "../components/Home/AboutUs";
import HowItWorks from "../components/Home/HowItWorks";
import axios from "axios";

const Home = () => {

  const [results, setResults] = useState({comments: [], listData: [], users: []});

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
    <Fragment>
      <HomeHeader />
      <HomeSearchBar onChange={(event) => updateStateFromSearch(event)} resultState={results?.listData || []}/>
      <AboutUs />
      <HowItWorks />
      <Footer />
    </Fragment>
  )
}

export default Home;