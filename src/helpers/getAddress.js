import Geocode from "react-geocode"

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
Geocode.setLanguage("en");

const getGeocode = geocode => {

  const address = Geocode.fromLatLng(geocode.lat.toString(), geocode.lng.toString())
  .then(
    (response) => {
      const results = response.results[0].formatted_address;
      return results;
    },
    (error) => {
      console.error("An error occured:", error);
      return "";
    }
  );

  return address;
}

export default getGeocode;