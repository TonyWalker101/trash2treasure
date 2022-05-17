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
      const results = searchDBWithGeocode([lat, lng])
      console.log("results inside promise", results)
      return results;
    },
    (error) => {
      console.error("An error occured:", error);
    }
  )

  return results;
}

const searchDB = (data, item) => {
  if (!item) {
    return;
  }

  // const searchableItem = item.toLowerCase();

  // const matchingResults = data.filter(treasure => {
  //   return treasure.name.toLowerCase().includes(searchableItem) || treasure.description.toLowerCase().includes(searchableItem);
  // });
  
  // return matchingResults;

  axios.post(`http://localhost:3001/donations/search/${item}`)
  .then((results) => {
    console.log("results of db query:", results);
    return results;
  })
  
};

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
  if (form.location) {
    const results = getGeocode(form.location)
    .then(results => {
      console.log("## results inside search B clicked:", results)
      return results;
    });

    return results;

  }

  // handles item search
  if (form.item) {
    // const results = searchDB(previousResults, form.item);
    const results = axios.post(`http://localhost:3001/donations/search/`, `name=${form.item}`)
    .then((results) => {
      return results.data;
    }).catch((error) => {
      return console.log("Error occured in item search:", error)
    })

    return results;
  }

  if (!form.item && !form.location) {
    const results = axios.post(`http://localhost:3001/donations/search/`)
    .then((results) => {
      return results.data;
    }).catch((error) => {
      return console.log("Error occured in item search:", error)
    })

    return results;
  }

};

export default searchButtonClicked;