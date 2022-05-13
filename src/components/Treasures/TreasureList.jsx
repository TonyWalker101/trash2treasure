import Treasure from "./Treasure";

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