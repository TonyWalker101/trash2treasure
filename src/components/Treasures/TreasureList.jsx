import Treasure from "./Treasure";
import axios from "axios";
import { useState, useEffect } from "react";

function TreasureList() {

  const [state, setState] = useState([])

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/")
    ])
    .then((e) => setState(e[0].data))
    .catch((error) => console.log(`Error loading API data. Error: ${error}`));
  }, []);

  const treasureItems = state.map( treasure => {
    return (
      <Treasure key={treasure.id} id={treasure.id} name={treasure.name}/>
    )
  });

  return (
    <>
      <div>
        <h2>This is a list of Treasures: </h2>
        <ul>{treasureItems}</ul>
      </div>
    </>
  )
}

export default TreasureList