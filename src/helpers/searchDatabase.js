import Geocode from "react-geocode"
import listData from "../__mocks__/list";
import axios from "axios";


Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

Geocode.setLanguage("en");

const getGeocode = location => {

  const results = Geocode.fromAddress(location)
  .then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;

      const searchData = {};
      searchData.geocode = [lat, lng];
      searchData.results = searchDBWithGeocode(searchData.geocode)
      // console.log("## results from inside getGeocode", searchData)
      return searchData;
    },
    (error) => {
      console.error("An error occured getting geocode! But was caught ;) ", error);
      const results = {
        geocode: [43.6532, -79.3832],
        results : null
      }
      return results;
    }
  )
  
  // test.results = results;
  console.log("## getgeocode returns:", results)
  return results;
}

// const searchDB = (data, item) => {
//   if (!item) {
//     return;
//   }

//   axios.post(`http://localhost:3001/donations/search/${item}`)
//   .then((results) => {
//     console.log("results of db query:", results);
//     return results;
//   })
  
// };

const searchDBWithGeocode = (geocode) => {

  console.log("geocode array", geocode);

  const data = listData;

  const matchingResults = data.filter(treasure => {

    return (geocode[0] - 0.2) <= (treasure.latitude * 1) && (treasure.latitude * 1) <= (geocode[0] + 0.2) && (geocode[1] - 0.2) <= (treasure.longitude * 1) && (treasure.longitude * 1) <= (geocode[1] + 0.2)
  });

  return matchingResults;

};

// Search button

const searchButtonClicked = (form, previousResults) => {

  // handles location search
  if (form.location!=="") {

    const results = getGeocode(form.location)
    .then(results => {
      console.log("## results inside search B clicked:", results)
      return results;
    });

    if (!results) {
      
    }

    // console.log("after async in search button clicked:", results);

    return results;

  }

  // handles item search
  if (form.item!=="") {

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

  if (form.item==="" && form.location==="") {
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