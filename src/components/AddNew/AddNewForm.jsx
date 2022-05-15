import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button} from '@mui/material';
import { useState } from 'react';
import axios from "axios";

// cloudinary.config({ 
//   cloud_name: "djv3yhbok",
//   api_key: "373195159265376",
//   api_secret: "NUmKQT4OPyUxPinBj7qsfCF-XxY",
//   secure: true
// });

const AddNewForm = (props) => {

  const [selectedFile, setSelectedFile] = useState(null);

  // On file select (from the pop up)
  const onFileChange = event => {
  
    // Update the state
    setSelectedFile({ selectedFile: event.target.files[0] });
    onFileUpload();
  
    Promise.all([
      axios.post(`https://api.cloudinary.com/v1_1/djv3yhbok/upload`, selectedFile)
    ])
    .then((e) => console.log(e))
    .catch((error) => console.log(`Error loading API data. Error: ${error}`));

    // cloudinary.uploader.upload(selectedFile, function(error, result) {console.log(result, error)});
  };

  const onFileUpload = () => {
    
    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append(
      "myFile",
      selectedFile
    )
    return formData
  };

  console.log("file name:", selectedFile);

  const populateForm = () => {
    
  };

  return(
    <div className="form-container">
      <ThemeProvider theme={theme}>
        <Typography variant="title" id="add-new-title" sx={{mb: 5}}>Add A Treasure</Typography>

        <form id="add-new-form">
          <TextField id="outlined-basic" label="Title" variant="outlined" />
          <div className='search-container'>
            <TextField id="outlined-basic" label="Location" variant="outlined" sx={{width: "100%"}}/>
            <button id="address-button" ><i class="fa-solid fa-magnifying-glass fa-xl"></i></button>
            <Typography variant="helper" sx={{mt: -5}}>Please input an address <b>OR</b> adjust the pin on the map to generate a location</Typography>
          </div>

          <FormControl sx={{width: "200px"}}>
            <InputLabel id="demo-simple-select-label">Condition</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Condition"
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
            />

          <>
          <input accept="image/*" type="file" id="select-image" style={{ display: 'none' }} onChange={(e) => onFileChange(e)}/>
          <label htmlFor="select-image">
          <Button variant="contained" component="span" fontWeight="fontWeightRegular" disableElevation className="button-group" color="primary">Upload An Image</Button>
          </label></>
          <Typography variant="helper" sx={{mt: -3}}>Please upload a jpep, jpg or png file</Typography>


          <Button variant="contained" fontWeight="fontWeightRegular" disableElevation className="button-group" color="primary" sx={{mt: 5, width: "100%"}} onClick={console.log("Button Test")}>Submit</Button>
        </form>
      </ThemeProvider>
    </div>
    
  )
}

export default AddNewForm;