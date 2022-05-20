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

const CongratsModal = (props) => {
  const [countDown, setCountDown] = useState(3)
  useEffect(()=> {
    setTimeout(() => {
      props.setCongrats(false);
      props.setModal(null);
    }, 3000);
    setTimeout(() => setCountDown(prev => prev - 1), 1000);
  }, [countDown])

  return(
    <Modal
      open={props.congrats}
      onClose={()=>{props.setCongrats(false);}}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="modal"
    >
      <>
      <ThemeProvider theme={theme}>
      
        <div className="congrats-modal-container">
          <div className="congrats-container">
            <div className="button-container">
              <button onClick={()=>{props.setCongrats(false);}} className="close-button"><i class="fa-solid fa-xmark fa-2xl"></i></button>
            </div>

            <Typography variant="title" sx={{mb:2}}>Congratulations!</Typography>
            <Typography variant="congratsText" sx={{mb:6}}>You've found your treasure!</Typography>
            <img src="../images/congrats.gif" id="congrats-gif"/>
            <Typography variant="modalText">Redirecting to the results list in <b>{countDown} </b>seconds</Typography>
          </div>
        </div>
      </ThemeProvider>
      </>
    </Modal>
  )
}

export default CongratsModal;