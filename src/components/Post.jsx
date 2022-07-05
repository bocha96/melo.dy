import React from 'react'
import {
  Card,

  CardMedia,
  Typography,

  CardContent,
  Box,
  IconButton,
  Divider,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export const Post = (props) => {
  const song = props.song;
  return (
    <Card sx={{ display: "flex", margin: 5 }}>
      <Box sx={{ ml: "auto", display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 0 auto", width: 300, maxHeight: 225 }}>
          <Typography variant="h6" component="div" sx={{ pb: "3%" }}>
            {song.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ pb: "1%" }}>
            {song.artist}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ pb: 3 }}>
            {song.year}
          </Typography>
          <Divider variant='middle' />
          <Box sx={{ display: "flex", alignItems: "center", pl: "110px", pt: 2, width: "100px" }}>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Box>

      <CardMedia

        component="img"
        sx={{ ml: "auto", width: "50%", maxHeight: 250 }}
        image="https://random.imagecdn.app/300/250"
        alt={song.title}
      />
    </Card>
  )
}

