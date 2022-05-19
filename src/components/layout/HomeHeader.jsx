import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@mui/material';

const HomeHeader = () => {
  //get username with id=1
  const [username, setUsername] = useState("")
  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/users")
    ])
    .then(all => {
      setUsername(all[0].data[0].user_name); 
    })
    .catch((error) => console.log(`Error loading API data. Error: ${error}`));
  }, []);

  return(
    <header>
      <Link href='/' id="header-logo"><img src="../images/logo_home.png" alt="logo"/></Link>
      <nav id="home-header">
        <ThemeProvider theme={theme}>
          <Typography variant="userWelcome" sx={{mr: 5, mt: 2}}>Hello, <b>{username}</b></Typography>
          <Button variant="contained" disableElevation href="/add-new" className="button-group"  color="secondary" sx={{mr: 5}}>Add Treasure</Button>
        </ThemeProvider>
      </nav>
    </header>
    
  )
}

export default HomeHeader;