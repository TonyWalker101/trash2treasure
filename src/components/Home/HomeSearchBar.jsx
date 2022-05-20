import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const HomeSearchBar = (props) => {
  const [submitError, setSubmitError] = useState(false);

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate(`/search-result`);
  }

  const onSubmit = () => {
    if (props.indexSearch.location === null && props.indexSearch.item === null) {
      setSubmitError(true);
    } else {
      routeChange();
    }
  }

  return(
    <div className="index-search-container">
      <ThemeProvider theme={theme}>
      <form className="index-search-bar" id="index-search"  autocomplete="off">
          
          <TextField id="filled-basic" label="Search by location" variant="filled" size="small"   InputProps={{ disableUnderline: true }} onChange={(e) => {props.setIndexSearch({...props.indexSearch, location: e.target.value})}}/>
          <div className="index-vl"></div>

          <TextField id="filled-basic" label="Search by item" variant="filled" size="small" InputProps={{ disableUnderline: true }} onChange={(e) => {props.setIndexSearch({...props.indexSearch, item: e.target.value})}}/>

            <Button variant="contained" disableElevation color="primary" className="index-search-button" sx={{ borderRadius: 8 }}  onClick={onSubmit}><i className="fa-solid fa-magnifying-glass fa-xl"></i></Button>
        </form>
          {submitError &&
            <div id="home-error-container">
              <Typography variant="errorText" align="right">* Please provide a location or an item name</Typography>
            </div>
          }
          </ThemeProvider>
    </div>
    
  )
}

export default HomeSearchBar;