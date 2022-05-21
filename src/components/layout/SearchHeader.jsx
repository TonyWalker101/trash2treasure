import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import searchButtonClicked from '../../helpers/searchDatabase';
import { useEffect, useState } from "react";

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

    setPlaceHolder(placeHolder);
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
    setPlaceHolder({location: "",
      item: ""})
  }

  return(
    <header>
      <nav id="search-nav">
        <a href='/'><img src="../images/logo_home.png" alt="logo" id="search-page-logo"/></a>

        <ThemeProvider theme={theme}>
          <Button variant="contained" disableElevation href="/add-new" className="button-group"  color="secondary" sx={{mr: 5, mt: 2}}>Add Treasure</Button>
        </ThemeProvider>
      </nav>
        
        <form className="header-search-bar"  autoComplete="off">
          <ThemeProvider theme={theme}>
          
          <TextField id="filled-basic" label="Search by location" variant="filled" size="small" defaultValue={placeHolder.location} 
          sx= {{width: "200px"}}
          InputProps={{ disableUnderline: true}} onChange={(event) => handleLocationInputChanged(event.target.value)}/>
          <div className="vl"></div>

          <TextField id="filled-basic" label="Search by item" variant="filled" size="small" defaultValue={placeHolder.item} InputProps={{ disableUnderline: true }} onChange={(event) => handleItemInputChanged(event.target.value)} />

            <Button variant="contained" disableElevation color="primary" className="search-button" sx={{ borderRadius: 8 }} onClick={e => {e.preventDefault(); handleSearch();}} ><i className="fa-solid fa-magnifying-glass fa-xl"></i></Button>
            <button className="clear-button" onClick={onClear}><i class="fa-solid fa-xmark fa-xl"></i></button>
          </ThemeProvider>
        </form>
    </header>
    
  )
}

export default HomeHeader;