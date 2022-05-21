import axios from "axios";
import getGeocode from "../helpers/getGeoCode"

// Search button

const searchButtonClicked = (form) => {

   // handles location + item search

   if (form.item!=="" && form.location!=="") {
    console.log("Hello from inside double search!");

    const results = Promise.all([
      axios.post(`http://localhost:3001/donations/search/`, `name=${form.item}&location=${form.location}`),
      getGeocode(form.location)
    ])
    .then((e) => {
      
      const searchData = {geocode:[]};

      if (e[0].data[0]) {
        searchData.geocode = [e[0].data[0].latitude*1, e[0].data[0].longitude*1]
      } else {
        searchData.geocode = [e[1][0]*1, e[1][1]*1];
      }

      searchData.results = e[0].data;
      return searchData;

    }).catch((error) => {
      console.log("Error occured in item search! But was caught ;)", error)
      const results = {
        geocode: [43.6532, -79.3832],
        results : null
      }
      return results;
    })
    
    return results;
  }

  // handles location search
  else if (form.location!=="") {
    console.log("Hello from location search!");

    const results = Promise.all([
      axios.post(`http://localhost:3001/donations/search/`, `location=${form.location}`),
      getGeocode(form.location)
    ])
    .then((e) => {
      const searchData = {geocode:[e[1][0]*1, e[1][1]*1]};
      console.log("location response:", e[0])
      searchData.results = e[0].data;
      return searchData;

    }).catch((error) => {
      console.log("Error occured in item search! But was caught ;)", error)
      const results = {
        geocode: [43.6532, -79.3832],
        results : null
      }
      return results;
    })
    
    return results;

  }

  // handles item search
  else if (form.item!=="") {

    // const results = searchDB(previousResults, form.item);
    const results = axios.post(`http://localhost:3001/donations/search/`, `name=${form.item}`)
    .then((e) => {
      const searchData = {geocode:[]};

      if (e.data[0]) {
        searchData.geocode = [e.data[0].latitude*1, e.data[0].longitude*1]
      }
      searchData.results = e.data;
      return searchData;
    }).catch((error) => {
      console.log("Error occured in item search! But was caught ;)", error)
      const results = {
        geocode: [43.6532, -79.3832],
        results : null
      }
      return results;
    })

    return results;
  }

  else if (form.item==="" && form.location==="") {
    const results = axios.post(`http://localhost:3001/donations/search/`)
    .then((e) => {
      const searchData = {geocode:[]};
      searchData.results = e.data;
      return searchData;
    }).catch((error) => {
      console.log("Error occured in empty item search! But was caught ;) ", error)
      const results = {
        geocode: [43.6532, -79.3832],
        results : null
      }
      return results;
    })

    return results;
  }

};

export default searchButtonClicked;