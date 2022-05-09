import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

const HomeHeader = () => {
  return(
    <header>
      <a href='/'><img src="../images/logo_home.png" alt="logo"/></a>
      <nav id="home-header">
        <ThemeProvider theme={theme}>
          <Button variant="contained" fontWeight="fontWeightRegular" disableElevation className="button-group" color="primary" sx={{mr: 5}} >Sign In</Button>
          <Button variant="contained" disableElevation href="/add-new" className="button-group"  color="secondary" sx={{mr: 5}}>Add Treasure</Button>
        </ThemeProvider>
      </nav>
    </header>
    
  )
}

export default HomeHeader;