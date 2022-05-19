import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from "react";
import searchButtonClicked from '../../helpers/searchDatabase';

const HomeSearchBar = () => {

  const [search, setSearch] = useState({
    location: null,
    item: null
  });

  // handles location text in Search bar
  const handleLocationInputChanged = e => {
    setSearch(prev => ({...prev, location: e}));
  }

  // handles item text in Search bar
  const handleItemInputChanged = e => {
    setSearch(prev => ({...prev, item: e}));
  }

  const handleSearch = () => {
    // const previousResults = props.resultState;

    // async function - updates state in Search Results page
    // searchButtonClicked(search, previousResults).then((data) => {
    //   console.log("## data", data);
    //   props.onChange(data);
    // });

  }

  return(
    <div className="index-search-container">
      <form className="index-search-bar" id="index-search">
          <ThemeProvider theme={theme}>
          
          <TextField id="filled-basic" label="Search by location" variant="filled" size="small"   InputProps={{ disableUnderline: true}} onChange={(event) => handleLocationInputChanged(event.target.value)}/>
          <div className="index-vl"></div>

          <TextField id="filled-basic" label="Search by item" variant="filled" size="small" InputProps={{ disableUnderline: true }} onChange={(event) => handleItemInputChanged(event.target.value)}/>

            <Button variant="contained" disableElevation color="primary" className="search-button" sx={{ borderRadius: 8 }} onClick={handleSearch} ><i className="fa-solid fa-magnifying-glass fa-xl"></i></Button>
          </ThemeProvider>
        </form>
    </div>
    
  )
}

export default HomeSearchBar;