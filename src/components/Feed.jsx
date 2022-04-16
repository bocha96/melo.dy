import { Box, Typography, InputBase, styled } from '@mui/material';
import {React, useState} from 'react';
import { Post } from './Post';
import { search } from './SearchFunc';
import data from '../store/songs.json';



const Search = styled("div")(({theme})=>({
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  border: "solid 1px",
}));


export const Feed = () => {
  
  const [songsList, updateSongsList] = useState(data.songs.slice(0,10));
  
  return (
    <Box flex={6}>
      <Box justifyContent="center">
      <Typography variant="h5">Welcome malomaniac!</Typography>
      <Search>
      <InputBase 
        placeholder="Search..." 
        inputProps={{'aria-label':'search'}} 
        onChange={e=>(
          updateSongsList(
            search(data.songs,e.target.value)
            )
        )
      }
      />
      </Search>
      </Box>

      {songsList.map((song,index)=>(<Post key={index} song={song}/>))}
    </Box>
  )
}
