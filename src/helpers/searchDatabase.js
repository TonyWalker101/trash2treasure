import Geocode from "react-geocode"
import listData from "../__mocks__/list";

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

  const searchableItem = item.toLowerCase();

  const matchingResults = data.filter(treasure => {
    return treasure.name.toLowerCase().includes(searchableItem) || treasure.description.toLowerCase().includes(searchableItem);
  });
  
  return matchingResults;
  
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
    const results = searchDB(previousResults, form.item);
    return results;
  }

};

export default searchButtonClicked;