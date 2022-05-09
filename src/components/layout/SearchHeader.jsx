import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

const HomeHeader = () => {
  return(
    <header>
      <nav id="search-nav">
        <a href='/'><img src="../images/logo_home.png" alt="logo" id="search-page-logo"/></a>

        <ThemeProvider theme={theme}>
          <Button variant="contained" disableElevation href="/add-new" className="button-group"  color="secondary" sx={{mr: 5, mt: 2}}>Add Treasure</Button>
        </ThemeProvider>
      </nav>
        
        <form class="header-search-bar">
          <TextField id="standard-basic" label="Search by location" variant="standard" size="small" InputProps={{ disableUnderline: true }}/>
          <div class="vl"></div>

          <TextField id="standard-basic" label="Search by item" variant="standard" size="small" InputProps={{ disableUnderline: true }}/>

          <ThemeProvider theme={theme}>
            <Button variant="contained" disableElevation color="primary" className="search-button" sx={{ borderRadius: 8 }}><i class="fa-solid fa-magnifying-glass fa-xl"></i></Button>
          </ThemeProvider>
        </form>
    </header>
    
  )
}

export default HomeHeader;