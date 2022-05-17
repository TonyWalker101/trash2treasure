import { Modal, Button, TextField } from "@mui/material";
import { getDataById, getUserNameByItemId, getCommentsByItemId } from "../../helpers/selector";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import ReactTimeAgo from 'react-time-ago'
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import CommentSection from "./CommentSection";
import axios from "axios";
import React from "react";

const DetailsModal = (props) => {
  const [claim, setClaim] = useState(null);
  const [comment, setComment] = useState({comment: '', donation_id: null});
  const [submitError, setSubmitError] = useState(false);
  const textInput = React.useRef(null);


  const selectedData = getDataById(props.listData, props.modal)[0]

  const setOpen = () => {
    if (props.modal === null) {
      return false
    } 
    return true;
  }

  const userName = getUserNameByItemId(props.users, props.listData, props.modal)

  const comments = getCommentsByItemId(props.comments, props.modal);

  
  const onSubmit = () => {
    if (comment.comment === "") {
      setSubmitError(true);
    } else {
      setSubmitError(false);
      Promise.all([
        axios.post('http://localhost:3001/add-comment', comment)
      ]).then(()=>{
        Promise.all([
          axios.get("http://localhost:3001/comments")
        ]).then((all) => props.setResults(
          prev => ({...prev,
            comments:all[0].data
          })))
      })
      .catch((error) => console.log(`Error loading API data. Error: ${error}`))
    }
    
  }

  return(
    <Modal
      open={setOpen()}
      onClose={()=>{props.setModal(null); setClaim(null);}}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="modal"
    >
      <>
      <ThemeProvider theme={theme}>
      
        <div className="modal-container">
          <div className="item-info-container">
            <div className="button-container">
              <button onClick={()=>{props.setModal(null); setClaim(null)}} className="close-button"><i class="fa-solid fa-xmark fa-2xl"></i></button>
            </div>

            <div className="details-container">
              <div id="details-image-crop">
                {selectedData && <img src={selectedData.image} id="modal-img"/>}
              </div>

              <div className="details-text-containter">
                  <Typography variant="modalTitle" sx={{mb: 5}}>{selectedData && selectedData.name}</Typography>

                  <Typography variant="modalText" sx={{mb: 2}}><b>Location: </b>{selectedData && selectedData.location}</Typography>

                  <Typography variant="modalText" sx={{mb: 2}}><b>Condition: </b>{selectedData && selectedData.condition}</Typography>

                  <Typography variant="modalText" sx={{mb: 2}}><b>Description: </b>{selectedData && selectedData.description}</Typography>

                  <Typography variant="modalText" sx={{mb: 2}}><b>Posted by: </b>{userName}</Typography>

                  <Typography variant="modalText" sx={{mb: 10}}>Posted {selectedData && <ReactTimeAgo date={Date.parse(selectedData.created_at)} locale="en-US"/>}</Typography>
                  
                  
                  {(claim === null)?
                      <Button variant="contained" fontWeight="fontWeightRegular" disableElevation className="claim-button" color="primary" onClick={() => setClaim(props.modal)} sx={{mt: 1}}>Claim</Button>
                
                  :(
                      <div className="confirm-container">
                        <Typography variant="modalText" sx={{mb: 10}} ><b>Are you sure you are at the location & want to claim the item?</b></Typography> 
                        <div className="confirm-button-group">
                          <Button variant="contained" fontWeight="fontWeightRegular" disableElevation className="confirm-button" color="primary" onClick={() => setClaim(null)}>Cancel</Button>
        
                          <Button variant="contained" fontWeight="fontWeightRegular" disableElevation className="confirm-button" color="secondary" onClick={() => setClaim(null)}>Confirm</Button>
                        </div>
                    </div>
                  )}
                  
                  
                  
              </div>
            </div>
          </div>

          <div className="comment-container">
          <CommentSection comments={comments} users={props.users} />
          </div>
          <form className="add-comment-container">

            <TextField
              id="outlined-multiline-flexible"
              label="Add a comment"
              multiline
              minRows={4}
              inputRef={textInput}
              sx={{mt: 5}}
              onChange={e => {setComment({...comment, comment: e.target.value, donation_id: props.modal})}}
              />
            <div id="comment-button-container">
              <div id="comment-button-layout">
              <Button variant="contained" fontWeight="fontWeightRegular" disableElevation id="comment-button" color="primary" sx={{mt: 5}} onClick={e => {e.preventDefault(); onSubmit(); textInput.current.value = "";}}>Submit</Button>

              </div>
              {submitError &&
              <Typography variant="errorText" align="right">* Can not submit empty commment</Typography>
              }
            </div>
        </form >
        </div>
      </ThemeProvider>
      </>
    </Modal>
  )
}

export default DetailsModal;