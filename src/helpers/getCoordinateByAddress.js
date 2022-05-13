export default function convertAddressToLink (address) {
 
    let url = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    let addressUrl = address.replace(/ /g, "%20"); 
    const key = "&key="+process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    return url+addressUrl+key;
  
}