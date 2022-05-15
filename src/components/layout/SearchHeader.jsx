import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import searchButtonClicked from '../../helpers/searchDatabase';
import { useState } from "react";

const HomeHeader = (props) => {

  const [search, setSearch] = useState({
    location: null,
    item: null
  });

  const handleLocationInputChanged = e => {
    setSearch(prev => ({...prev, location: e}));
  }

  const handleItemInputChanged = e => {
    setSearch(prev => ({...prev, item: e}));
  }

  const handleSearch = () => {
    const previousResults = props.resultState;

    const results = searchButtonClicked(search, previousResults);
    
    props.onChange(results);
  }

  return(
    <header>
      <nav id="search-nav">
        <a href='/'><img src="../images/logo_home.png" alt="logo" id="search-page-logo"/></a>

        <ThemeProvider theme={theme}>
          <Button variant="contained" disableElevation href="/add-new" className="button-group"  color="secondary" sx={{mr: 5, mt: 2}}>Add Treasure</Button>
        </ThemeProvider>
      </nav>
        
        <form className="header-search-bar">
          <ThemeProvider theme={theme}>
          
          <TextField id="filled-basic" label="Search by location" variant="filled" size="small"   InputProps={{ disableUnderline: true}} onChange={(event) => handleLocationInputChanged(event.target.value)}/>
          <div className="vl"></div>

          <TextField id="filled-basic" label="Search by item" variant="filled" size="small" InputProps={{ disableUnderline: true }} onChange={(event) => handleItemInputChanged(event.target.value)}/>

            <Button variant="contained" disableElevation color="primary" className="search-button" sx={{ borderRadius: 8 }} onClick={handleSearch} ><i className="fa-solid fa-magnifying-glass fa-xl"></i></Button>
          </ThemeProvider>
        </form>
    </header>
    
  )
}

export default HomeHeader;