import { Box } from '@mui/material';
import { React } from 'react';
import { Post } from './Post';

export const Feed = (props) => {
  return (
    <Box flex={6}>
      {props.posts.map((song,index)=>(<Post key={index} song={song}/>))} 
    </Box>
  )
}
