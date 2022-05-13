import { Paper, Button, ListItem, ListItemText, ListItemButton, Box } from "@mui/material";
import { ThemeProvider } from "@mui/private-theming";
import theme from '../../theme';
import ResultListItem from "./ResultListItem";

const ResultList = () => {
  return(
    <div className="list-container">
        <ResultListItem />
    </div>
  )
}

export default ResultList;