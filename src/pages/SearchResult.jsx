import SearchHeader from "../components/layout/SearchHeader";
import SearchResultMap from "../components/SearchResult/SearchResultMap";
import ResultList from "../components/SearchResult/ResultList";
import "../stylesheet/SearchResult.css";
import listData from "../__mocks__/list";

const SearchResult = () => {
  return(
    <div>
      <SearchHeader />
      <SearchResultMap listData={listData} />
      <ResultList listData={listData}/>
    </div>
  )
}

export default SearchResult;