import Treasure from "./Treasure";
import axios from "axios";
import { useState } from "react";

// const [state, setState] = useState({})

const treasures = {
  id: null,
  user_id: null,
  treasure_name: null,
  location: null,
  description: null,
  condition: null,
  image: null
}

Promise.all([
  axios.get("http://localhost:3001/")
]).then((e) => console.log("Test worked!"));

function TreasureList() {

  const test = [1,2,3,4,5];

  const treasureItems = test.map( treasure => {
    return (
      <Treasure key={treasure} id={treasure}/>
    )
  }); 

  return (
    <>
      <div left="150px">
      <h2>This is a list of Treasures: </h2>
      <ul>{treasureItems}</ul>
      </div>
    </>
  )
}

export default TreasureList