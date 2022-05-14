import { Modal } from "@mui/material";

const DetailsModal = (props) => {

  const setOpen = () => {
    if (props.modal === null) {
      return false
    } 
    return true;
  }

  return(
    <Modal
      open={setOpen()}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="modal"
    >
      <div className="modal-container">
        <button onClick={props.handleClose} className="close-button"><i class="fa-solid fa-xmark fa-2xl"></i></button>
      </div>
    </Modal>
    // <></>
  )
}

export default DetailsModal;