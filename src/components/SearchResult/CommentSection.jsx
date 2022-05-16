import ReactTimeAgo from 'react-time-ago'
import { Typography,Divider } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';


const CommentSection = (props) => {
  const length = props.comments.length;
  const commentTag  = () => {
    if (length === 0 || length === 1) {
      return length + " comment";
    } else {
      return length + " comments";
    }
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Divider><Typography variant='modalText'><b>{commentTag()}</b> </Typography></Divider>
      {props.comments && 
        props.comments.map((data, index) => {
          return(
            <section className="comment-section" key={index}>
            <Typography variant='modalText' sx={{mb:3}}>{data.comment}</Typography>
              <Typography variant='commentInfo' align="right">Posted by {data.id}</Typography>
              <Typography variant='commentInfo' align="right"><ReactTimeAgo date={Date.parse(data.created_at)} locale="en-US"/></Typography>
            </section>
          )}
        )
      }
      </ThemeProvider>
    </div>
  )
}

export default CommentSection;