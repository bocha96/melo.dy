import { Box } from '@mui/material';
import { React } from 'react';
import { Post } from './Post';

export const Feed = (props) => {
  return (
    <Box flex={6} style={{ margin: "0 340px 0 250px" }}>
      {props.posts.map((song, index) => (<Post key={index} song={song} />))}
    </Box>
  )
}
