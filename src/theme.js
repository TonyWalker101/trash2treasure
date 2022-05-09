import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#87cdd1",
      dark: "#69C3D1"
    }, 
    secondary: {
      main: "#f4e63f", 
      dark: "#F0D23C"
    }
  },
  spacing: 5, 
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(","), 
    fontWeightLight: 200, 
    fontWeightMedium: 300, 
    fontWeightRegular: 400, 
    fontWeightBold: 600, 
    allVariants: {
      color: "grey"
    }
  }
});

export default theme;