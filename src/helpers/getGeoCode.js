import Geocode from "react-geocode"

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
Geocode.setLanguage("en");

const getGeocode = location => {

  const geocode = [];

  Geocode.fromAddress(location)
  .then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      geocode.push(lat.toString(), lng.toString());
    },
    (error) => {
      console.error("An error occured:", error);
    }
  );
  
  return geocode;
}

export default getGeocode;