import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import {  Typography } from '@mui/material';

const AboutUs = () => {
  return(
    <div id="about-container">
      <ThemeProvider theme={theme}>
        <div id="what-is-container">
          <Typography variant="title" align="center">What Is t2t?</Typography>
          <div className='what-is-info'>
            <div className='image-comtainer'>
            <p id="img-info">Trash To Treasure </p>
              <img src="../../images/what_is_t2t.png" className='what-is-img'/>
            </div>
            <p className='what-is-text'>
            We’ve all been here - you bought something new and now you have something old that you don’t need anymore. Instead of putting that something outside your house with a “Free” Post-It note on it and hoping for the best, why not be a donor and list your free item in our app? Users can search the app for items that they need or just search for items in their general area. If your item gets matched with a user, simply put the item outside your house (or in a location you’re comfortable with) and ping the user that it’s available for pick-up. Or, set it and forget it! If your item isn’t picked up in a reasonable amount of time we’ll send someone to pick it up - a win win for everyone. Let’s all do our part to keep our streets clear of “good intentions”. <br/><br/>“Reducing waste doesn’t need to be a hassle - just List It!! Every little bit helps keep our world from looking like a pile of ...stuff!”
            </p>
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default AboutUs;