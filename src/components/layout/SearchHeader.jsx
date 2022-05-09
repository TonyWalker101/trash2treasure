import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

const HomeHeader = () => {
  return(
    <header>
      <form>
        <a href='/'><img src="../images/logo_home.png" alt="logo"/></a>
        <TextField id="standard-basic" label="Search by location" variant="standard" InputProps={{ disableUnderline: true }}/>
        <TextField id="standard-basic" label="Search by item" variant="standard" InputProps={{ disableUnderline: true }}/>
      </form>

      <nav>
        <ThemeProvider theme={theme}>
          <Button variant="contained" disableElevation href="/add-new" className="button-group"  color="secondary" sx={{mr: 5}}>Add Treasure</Button>
        </ThemeProvider>
      </nav>
    </header>
    
  )
}

export default HomeHeader;