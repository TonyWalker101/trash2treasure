import Geocode from "react-geocode"
import listData from "../__mocks__/list";

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API);

// set response language. Defaults to english.
Geocode.setLanguage("en");

// const location = "180 Wellington Avenue Toronto";

const getGeocode = location => {

  Geocode.fromAddress(location).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log("these are the coordinates:", lat, lng);
    },
    (error) => {
      console.error("An error occured:", error);
    }
  );
}

const searchDB = (data, item) => {
  if (!item) {
    return;
  }

  const searchableItem = item.toLowerCase();

  const matchingResults = data.filter(treasure => {
    return treasure.name.toLowerCase().includes(searchableItem) || treasure.description.toLowerCase().includes(searchableItem);
  });
  
  return matchingResults;
  
};


const searchButtonClicked = (form, previousResults) => {

  // const searchLocation = getGeocode(form);
  if (form.location) {
    getGeocode(form.location);
    console.log(`...Searching in ${form.location}:`);
  }

  if (form.item) {
    console.log(`Looking for ${form.item}?`)
    // console.log("previous resulst", previousResults);
    // console.log(searchDB(previousResults, form.item));
    const results = searchDB(previousResults, form.item);
    return results;
  }
  // console.log("this is the event form:", form)


  // console.log("searchData Array:", searchData)
  // console.log("items that match your search:", search.search("2"));

};

export default searchButtonClicked;