import { Modal, Button } from "@mui/material";
import { getDataById } from "../../helpers/selector";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import ReactTimeAgo from 'react-time-ago'
import { Typography } from "@mui/material";
import { useState } from "react";

const DetailsModal = (props) => {
  const [claim, setClaim] = useState(null)

  const selectedData = getDataById(props.listData, props.modal)[0]

  const setOpen = () => {
    if (props.modal === null) {
      return false
    } 
    return true;
  }

  // console.log(selectedData);

  return(
    <Modal
      open={setOpen()}
      onClose={()=>props.setModal(null)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="modal"
    >
      <>
      <ThemeProvider theme={theme}>
        <div className="modal-container">

          <div className="button-container">
            <button onClick={()=>props.setModal(null)} className="close-button"><i className="fa-solid fa-xmark fa-2xl"></i></button>
          </div>

          <div className="details-container">
            <div id="details-image-crop">
              {selectedData && <img src={selectedData.image} id="modal-img"/>}
            </div>

            <div className="details-text-containter">
                <Typography variant="modalTitle" sx={{mb: 5}}>{selectedData && selectedData.name}</Typography>

                <Typography variant="modalText" sx={{mb: 2}}>Location: {selectedData && selectedData.location}</Typography>

                <Typography variant="modalText" sx={{mb: 2}}>Condition: {selectedData && selectedData.condition}</Typography>

                <Typography variant="modalText" sx={{mb: 2}}>Description: {selectedData && selectedData.description}</Typography>

                <Typography variant="modalText" sx={{mb: 10}}>Posted {selectedData && <ReactTimeAgo date={Date.parse(selectedData.created_at)} locale="en-US"/>}</Typography>
                
                
                {(claim === null)?
                    <Button variant="contained" fontWeight="fontWeightRegular" disableElevation className="claim-button" color="primary" onClick={() => setClaim(props.modal)}>Claim</Button>
               
                :(
                    <div>
                      <Typography variant="modalText" sx={{mb: 10}}><b>Are you sure you are at the location & want to claim the item?</b></Typography> 
                      <div className="confirm-button-group">
                        <Button variant="contained" fontWeight="fontWeightRegular" disableElevation className="confirm-button" color="primary" onClick={() => setClaim(null)}>Cancel</Button>
      
                        <Button variant="contained" fontWeight="fontWeightRegular" disableElevation className="confirm-button" color="secondary" onClick={() => setClaim(null)}>Confirm</Button>
                      </div>
                  </div>
                )}
                
            <form>
              
            </form>
                
                
            </div>
          </div>
        </div>
      </ThemeProvider>
      </>
    </Modal>
  )
}

export default DetailsModal;