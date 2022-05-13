import { Typography, Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import listData from '../../__mocks__/list';

const ResultListItem = () => {
  return(
    <ThemeProvider theme={theme}>
      <div className="item-card">
        <div className="image-crop">
          <img src="../images/fancy-bags.jpeg" alt="treasure-photo" className="item-img"/>
        </div>
        <div className="item-text">
          <Typography variant="itemTitle" sx={{mb: 5}}>Fancy Bags</Typography>
          <Typography variant="itemText" sx={{mb: 5}}>Location: Trash to Treasure Headquarter, 1234 56Ave, Toronto, ON</Typography>
          <Typography variant="itemText" sx={{mb: 5}}>Posted 100 days ago</Typography>
          <div className="item-button-container">
            <Button variant="contained" fontWeight="fontWeightRegular" disableElevation className="itemButton" color="primary" sx={{mr: 5}} >Details</Button>
          </div>
        </div>
      </div>

    </ThemeProvider>
)
}

export default ResultListItem;