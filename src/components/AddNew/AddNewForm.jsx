import React, { useState, useEffect } from 'react';
import axios from "axios";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button} from '@mui/material';
import getGeocode from '../../helpers/getGeoCode';
import { BrowserRouter as Router, Routes, Route, Switch, Link, Redirect, useNavigate } from "react-router-dom"


const AddNewForm = (props) => {

  const navigate = useNavigate();

  // stores file uploaded by user from File System
  const [selectedFile, setSelectedFile] = useState(null);

  // stores value provided by user in /add-new page
  const [form, setForm] = useState({
    name: null,
    latitude: null,
    longitude: null,
    location: props.location.address ? props.location.address : null,
    condition: null,
    description: null,
    image: null
  })
  
  // function runs when Submit button on /add-new page is clicked
  const onFormSubmit = () => {
  
    const uploadImage = "https://api.cloudinary.com/v1_1/djv3yhbok/image/upload";
    const formData = onFileUpload();

    Promise.all([
      axios.post(uploadImage, formData),
      getGeocode(form.location),
    ]).then((all) => {
      // creates a synchronous version of form state to send to database
      const updatedForm = {...form, image: all[0].data.url, latitude: all[1][0], longitude: all[1][1]}
      axios.post("http://localhost:3001/add-donation", updatedForm)
      .then(() => {
        setForm(prev => {
          // creates a synchronous version of form state to send to /search-result page
          const newForm = {...prev, image: all[0].data.url, latitude: all[1][0], longitude: all[1][1]}

          // navigates to /search-result and passes form state
          navigate("/search-result", { replace: true, state: newForm });

          return newForm
          })
        })
      .catch((error) => console.log(`Error sending form to db. Error: ${error}`))

    }).catch((error) => console.log(`Error loading form data. Error: ${error}`))

  };

  // prepares file uploaded by user to be sent to API
  const onFileUpload = () => {
    
    const formData = new FormData();
  
    formData.append("file", selectedFile);
    formData.append("upload_preset", "rzhq8txe");

    return formData
  };

  // updates location section of form when map is clicked
  useEffect(() => {

    setForm(prev => ({...prev, location: `${props.location.address} `}))

  }, [props.location.address]);


  const setValue = () => {
    return form.location;
  }

  return(
    <div className="form-container">
      <ThemeProvider theme={theme}>
        <Typography variant="title" id="add-new-title" sx={{mb: 5}}>Add A Treasure</Typography>

        <form id="add-new-form"  autocomplete="off">
          <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(e) => setForm(prev => ({...prev, name: e.target.value}))}/>
          <div className='search-container'>
            <TextField id="outlined-basic" label="Location" variant="outlined" sx={{width: "100%"}} value={setValue()} onChange={(e) => setForm(prev => ({...prev, location: e.target.value}))}/>
            <button id="address-button" ><i class="fa-solid fa-magnifying-glass fa-xl"></i></button>
            <Typography variant="helper" sx={{mt: -5}}>Please input an address <b>OR</b> adjust the pin on the map to generate a location</Typography>
          </div>

          <FormControl sx={{width: "200px"}}>
            <InputLabel id="demo-simple-select-label">Condition</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Condition"
              onChange={(e) => setForm(prev => ({...prev, condition: e.target.value}))}
              >
              <MenuItem value={"Like New"}>Like New</MenuItem>
              <MenuItem value={"Good"}>Good</MenuItem>
              <MenuItem value={"Acceptable"}>Acceptable</MenuItem>
              <MenuItem value={"Broken"}>Broken</MenuItem>
            </Select>
          </FormControl>
          
          <TextField
            id="outlined-multiline-flexible"
            label="Description"
            multiline
            minRows={4}
            onChange={(e) => setForm(prev => ({...prev, description: e.target.value}))}
            />

          <>
          <input accept="image/*" type="file" id="select-image" style={{ display: 'none' }} onChange={(event) => setSelectedFile(event.target.files[0])}/>
          <label htmlFor="select-image">
          <Button variant="contained" component="span" fontWeight="fontWeightRegular" disableElevation className="button-group" color="primary">Upload An Image</Button>
          </label></>
          <Typography variant="helper" sx={{mt: -3}}>Please upload a jpep, jpg or png file</Typography>


          <Button variant="contained" fontWeight="fontWeightRegular" disableElevation className="button-group" color="primary" sx={{mt: 5, width: "100%"}} onClick={onFormSubmit}>Submit</Button>
        </form>
      </ThemeProvider>
    </div>
    
  )
}

export default AddNewForm;