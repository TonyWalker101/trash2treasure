import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import searchButtonClicked from '../../helpers/searchDatabase';
import { useEffect, useState, useRef } from "react";

const HomeHeader = (props) => {

  const [search, setSearch] = useState({
    location: props.indexSearch.location,
    item: props.indexSearch.item
  });
  
  const [placeHolder, setPlaceHolder] = useState({
    location: props.indexSearch.location ? props.indexSearch.location : "", 
    item: props.indexSearch.item ? props.indexSearch.item : ""
  })
  
  const handleSearch = () => {
    props.setLoading(true);
    setPlaceHolder({location:inputTextLocation.current.value,
    item: inputTextItem.current.value});
    const searchCriteria = placeHolder;

    // async function - updates state in Search Results page
    searchButtonClicked(searchCriteria).then((data) => {
      props.onChange(data);
      // props.setFilteredListData(data);
    });
  }
  
  //handles search from /index page
  useEffect(()=>{handleSearch()},[search]);

  // handles location text in Search bar
  const handleLocationInputChanged = e => {
    setPlaceHolder(prev => ({...prev, location: e}));
  }

  // handles item text in Search bar
  const handleItemInputChanged = e => {
    setPlaceHolder(prev => ({...prev, item: e}));
  }
  
  const onClear = () => {
    inputTextLocation.value = "";
    // // inputTextLocation.onFocus = false;
    inputTextItem.value = "";
    // inputTextItem.onFocus = false;
    setPlaceHolder(prev => ({...prev, location: "", item: ""}));
    setSearch({location:"", item:""});
    props.setSelected(null);
  }
  const inputTextLocation = useRef();
  const inputTextItem = useRef();

  return(
    <header>
      <nav id="search-nav">
        <a href='/'><img src="../images/logo_home.png" alt="logo" id="search-page-logo"/></a>

        <ThemeProvider theme={theme}>
          <Button variant="contained" disableElevation href="/add-new" className="button-group"  color="secondary" sx={{mr: 5, mt: 2}}>Add Treasure</Button>
        </ThemeProvider>
      </nav>
        
        <form className="header-search-bar"  autoComplete="off" onSubmit={e => e.preventDefault()}>
          <ThemeProvider theme={theme}>
          
          <TextField id="filled-basic" label="Search by location" variant="filled" size="small" 
          inputRef={inputTextLocation}
          value={placeHolder.location} 
          sx= {{width: "200px"}}
          InputProps={{ disableUnderline: true}} onChange={(event) => handleLocationInputChanged(event.target.value)}/>
          <div className="vl"></div>

          <TextField id="filled-basic" label="Search by item" variant="filled" size="small" 
          inputRef={inputTextItem}
          value={placeHolder.item} InputProps={{ disableUnderline: true }} onChange={(event) => handleItemInputChanged(event.target.value)} />

            <Button variant="contained" disableElevation color="primary" className="search-button" sx={{ borderRadius: 8 }} onClick={e => {e.preventDefault(); handleSearch(); props.setSelected(null);}} ><i className="fa-solid fa-magnifying-glass fa-xl"></i></Button>
            <button className="clear-button" onClick={onClear}><i class="fa-solid fa-xmark fa-xl"></i></button>
          </ThemeProvider>
        </form>
    </header>
    
  )
}

export default HomeHeader;