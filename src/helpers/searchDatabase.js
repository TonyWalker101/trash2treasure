import Geocode from "react-geocode"
import listData from "../__mocks__/list";

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

// set response language. Defaults to english.
Geocode.setLanguage("en");

// const location = "180 Wellington Avenue Toronto";

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
  // .then(geocode => {
  //   return searchDBWithGeocode(geocode)});
  // console.log("results", results);
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

  // const latitudeArray = [];
  // const longitudeArray = [];

  // for (let i = (geocode[0] - 0.2); i <= (geocode[0] + 0.2); i++)
  // 2 < 3 < 4 

  const matchingResults = data.filter(treasure => {

    return (geocode[0] - 0.2) <= (treasure.latitude * 1) && (treasure.latitude * 1) <= (geocode[0] + 0.2) && (geocode[1] - 0.2) <= (treasure.longitude * 1) && (treasure.longitude * 1) <= (geocode[1] + 0.2)
  });

  // if (!matchingResults) {
  //   return [];
  // }

  console.log("matching results from inside search DB for geocode;", matchingResults);

  return matchingResults;

  // const matchingResults = data.filter(treasure => {
  //   return treasure.name.toLowerCase().includes(searchableItem) || treasure.description.toLowerCase().includes(searchableItem);
  // });
  
  // return matchingResults;
  
};


const searchButtonClicked = (form, previousResults) => {

  // const searchLocation = getGeocode(form);
  if (form.location) {
    // Promise.all(getGeocode(form.location))
    // .then(results => {
    //   console.log(results);

    // const results = getGeocode(form.location);
    // // })
    getGeocode(form.location)
    .then(results => {
      console.log("results inside search B clicked:", results)
      return results;
    });
    // console.log("results inside search B clicked:", results);
    // return results;
    
    // console.log("results from search button clicked:", results);

    // return results;
    // .then(results => searchDBWithGeocode(results));
    
    // console.log(`...Searching in ${form.location}:`);
    

  }

  if (form.item) {
    // console.log(`Looking for ${form.item}?`)
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