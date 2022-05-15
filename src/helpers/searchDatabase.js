import Geocode from "react-geocode"
import JsSearch from "js-search";

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

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

const searchButtonClicked = (form) => {

  // const searchLocation = getGeocode(form);

  getGeocode(form.location);
  // console.log("this is the event form:", form)
  console.log(`Looking for ${form.item}?`)
  console.log(`...Searching in ${form.location}:`);

};

export default searchButtonClicked;