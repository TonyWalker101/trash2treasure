import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

const HowItWorks = () => {
  return(
    <div id="how-it-works-container">
      <ThemeProvider theme={theme}>
        <div id="what-is-container">
        <Typography variant="title" align="center">How t2t Works?</Typography>
        <div id="cards">
          <div className='services-card'>
            <Typography variant="itemTitle" >
              Add Treasure
            </Typography>
            <img src="../../images/how-1.png" className='how-img' />
            <Typography variant="itemText" align='center' sx={{mt: 5, mb: 5}}>
              Add an item to the list and give it a second chance to become someone's treasure! 
            </Typography>
            <Button variant="contained" disableElevation href="/add-new" className="button-group"  color="primary">Add Treasure</Button>
          </div>
          <div className='services-card'>
            <Typography variant="itemTitle" >
              Search Treasure
            </Typography>
            <img src="../../images/how-2.png" className='how-img' />
            <Typography variant="itemText" align='center' sx={{mt: 5, mb: 5}}>
            Check the map by your location or the item list to see if there's any hidden treasure around you!
            </Typography>
            <Button variant="contained" disableElevation href="#home-header" className="button-group"  color="primary">Search Now</Button>
          </div>
          <div className='services-card'>
            <Typography variant="itemTitle" >
              Pick Up
            </Typography>
            <img src="../../images/how-3.png" className='how-img' />
            <Typography variant="itemText" align='center' sx={{mt: 5, mb: 5}}>
              Find any treasure that interests you? Go pick it up, mark the item as claimed & it's all yours!
            </Typography>
            <Button variant="contained" disableElevation href="#home-header" className="button-group"  color="primary">Search Now</Button>
          </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default HowItWorks;