import { Typography, Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import ReactTimeAgo from 'react-time-ago'

const ResultListItem = (props) => {
  return(
    <ThemeProvider theme={theme}>
      <div className="item-card">
        <div className="image-crop">
          <img src={props.image} alt="treasure-photo" className="item-img"/>
        </div>
        <div className="item-text">
          <Typography variant="itemTitle" sx={{mb: 5}}>{props.name}</Typography>
          <Typography variant="itemText" sx={{mb: 5}}>Location: {props.location}</Typography>
          <Typography variant="itemText" sx={{mb: 5}}>Posted <ReactTimeAgo date={props.created_at} locale="en-US"/></Typography>
          <div className="item-button-container">
            <Button variant="contained" fontWeight="fontWeightRegular" disableElevation className="itemButton" color="primary"  >Details</Button>
          </div>
        </div>
      </div>

    </ThemeProvider>
)
}

export default ResultListItem;