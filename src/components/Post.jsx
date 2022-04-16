import React from 'react'
import {Card, 
    CardActionArea, 
    CardMedia, 
    Typography, 
    CardActions, 
    Button,
    CardContent,
} from '@mui/material'

export const Post = (props) => {
  const song = props.song;
  return (
    <Card sx={{margin:5}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="120px"
        image={song.img_url}
        alt={song.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {song.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {song.artist}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {song.year}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        {song.web_url.slice(0,40)}
      </Button>
    </CardActions>
  </Card>
  )
}
