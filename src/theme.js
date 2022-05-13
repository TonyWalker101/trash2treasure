import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#87cdd1",
      dark: "#69C3D1", 
      light: "#FFFFFF"
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
      color: "#2d2d2d"
    }, 
    button: {
      fontWeight: "bold"
    }, 
    title: {
      color: "#4D318B", 
      fontWeight: "bold", 
      fontFamily: ['Poppins', 'sans-serif'].join(","), 
      fontSize: 40
    }, 
    helper: {
      color: "#4a4a4a", 
      fontWeight: "regular", 
      fontFamily: ['Poppins', 'sans-serif'].join(","), 
      fontSize: 14
    }, 
    itemTitle: {
      fontWeight: "bold", 
      fontFamily: ['Poppins', 'sans-serif'].join(","), 
      fontSize: 20
    }, 
    itemText: {
      fontWeight: "regular", 
      fontFamily: ['Poppins', 'sans-serif'].join(","), 
      fontSize: 15
    }, 
  }
});

export default theme;