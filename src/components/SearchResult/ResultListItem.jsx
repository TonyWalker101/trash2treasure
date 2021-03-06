import { Typography, Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import ReactTimeAgo from 'react-time-ago'

const ResultListItem = (props) => {

  const handleOpen = () => props.setModal(props.order);

  const selectedId = (selected, itemId) => {
    if(!selected){
      return false;
    }else if(selected.id === itemId) {
      return true;
    } 
  }

  const handleResultItemClick = () => {
    
    
    props.setSelected({lat: Number(props.latitude), lng:Number(props.longitude), title: props.name, created_at: props.created_at, id: props.id });
    
    //quick jump to center or slow pan? ASK TEAM

    // props.setResults(prev => (
    //   {...prev, 
    //   center: {
    //     lat: Number(props.latitude), 
    //     lng: Number(props.longitude)}
    //   }
    // ))

  }

  return(
    <ThemeProvider theme={theme}>
      <section className={selectedId(props.selected, props.order)? "item-card-selected" : "item-card"} id={`item-id-${props.order}`} onClick={handleResultItemClick}>
        <div className="image-crop">
          <img src={props.image} alt="treasure-photo" className="item-img"/>
        </div>
        <div className="item-text">
          <Typography variant="itemTitle" sx={{mb: 5}}>{props.name}</Typography>
          <Typography variant="itemText" sx={{mb: 5}}>Location: {props.location}</Typography>
          <Typography variant="itemText" sx={{mb: 5}}>Posted <ReactTimeAgo date={Date.parse(props.created_at)} locale="en-US"/></Typography>
          <div className="item-button-container">
            <Button variant="contained" fontWeight="fontWeightRegular" disableElevation className="itemButton" color="primary"  onClick={handleOpen}>Details</Button>
          </div>
        </div>
      </section>

    </ThemeProvider>
)
}

export default ResultListItem;