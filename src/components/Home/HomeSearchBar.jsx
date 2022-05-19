import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const HomeSearchBar = (props) => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate(`/search-result`);
  }

  return(
    <div className="index-search-container">
      <form className="index-search-bar" id="index-search"  autocomplete="off">
          <ThemeProvider theme={theme}>
          
          <TextField id="filled-basic" label="Search by location" variant="filled" size="small"   InputProps={{ disableUnderline: true }} onChange={(e) => {props.setIndexSearch({...props.indexSearch, location: e.target.value})}}/>
          <div className="index-vl"></div>

          <TextField id="filled-basic" label="Search by item" variant="filled" size="small" InputProps={{ disableUnderline: true }} onChange={(e) => {props.setIndexSearch({...props.indexSearch, item: e.target.value})}}/>

            <Button variant="contained" disableElevation color="primary" className="search-button" sx={{ borderRadius: 8 }}  onClick={routeChange}><i className="fa-solid fa-magnifying-glass fa-xl"></i></Button>
          </ThemeProvider>
        </form>
    </div>
    
  )
}

export default HomeSearchBar;