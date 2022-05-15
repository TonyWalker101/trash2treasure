import ResultListItem from "./ResultListItem";
import { useEffect } from "react";

const ResultList = (props) => {
  const listData = props.listData;
  const list = listData.map(data => {return <ResultListItem key={data.id} {...data} order={data.id} selected={props.selected} setModal={props.setModal}/>}) 


  return(
    <div className="list-container" id="list-container">
        {list}
    </div>
  )
}

export default ResultList;