import ResultListItem from "./ResultListItem";

const ResultList = (props) => {
  const listData = props.listData;
  const list = listData.map(data => {return <ResultListItem key={data.id} {...data} order={data.id} selected={props.selected} modal={props.modal} setModal={props.setModal} handleOpen={props.handleOpen}/>}) 


  return(
    <div className="list-container" id="list-container">
        {list}
    </div>
  )
}

export default ResultList;