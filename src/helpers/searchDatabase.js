import Geocode from "react-geocode"

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyAy1SXOH3JNtfc-VbNZ3-OX0iAGctZ0hls");

// set response language. Defaults to english.
Geocode.setLanguage("en");

const location = "180 Wellington Avenue Toronto";

Geocode.fromAddress(location).then(
  (response) => {
    const { lat, lng } = response.results[0].geometry.location;
    console.log("these are the coordinates:", lat, lng);
  },
  (error) => {
    console.error(error);
  }
);