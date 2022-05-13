import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button} from '@mui/material';
import { useState } from 'react';

const AddNewForm = () => {
  return(
    <div className="form-container">
      <ThemeProvider theme={theme}>
        <Typography variant="title" id="add-new-title" sx={{mb: 5}}>Add A Treasure</Typography>

        <form id="add-new-form">
          <TextField id="outlined-basic" label="Title" variant="outlined" />
          <TextField id="outlined-basic" label="Location" variant="outlined" />
          
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
          <input accept="image/*" type="file" id="select-image" style={{ display: 'none' }}/>
          <label htmlFor="select-image">
          <Button variant="contained" component="span" fontWeight="fontWeightRegular" disableElevation className="button-group" color="primary">Upload An Image</Button>
          </label></>
          <Typography variant="helper" sx={{mt: -5}}>Please upload a jpep, jpg or png file</Typography>


          <Button variant="contained" fontWeight="fontWeightRegular" disableElevation className="button-group" color="primary" sx={{mt: 5, width: "100%"}} >Submit</Button>
        </form>
      </ThemeProvider>
    </div>
    
  )
}

export default AddNewForm;