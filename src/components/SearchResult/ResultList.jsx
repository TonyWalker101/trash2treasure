import ResultListItem from "./ResultListItem";

const ResultList = (props) => {
  const listData = props.listData;
  console.log(listData);
  const list = listData.map(data => {return <ResultListItem key={data.id} {...data}/>}) 

  return(
    <div className="list-container">
        {list}
    </div>
  )
}

export default ResultList;