import React from 'react';
import { Box, Stack, Typography, Card, Button } from '@mui/material';


export const Sidebar = (props) => {
  const history = props.history;

  const handleClick = (index) => {
    props.moveTo(index);
  }

  return (
    <Box flex={2} sx={{
      width: "280px",
      position: "fixed",
      borderRight: "1px solid lightgray",
      height: "100%"
    }}>
      <Typography margin="5% 12% 0%" variant="h6" color="GrayText">
        Search history:
      </Typography>
      <Stack>
        {history.map((item, index) => (
          <Button
            key={index}
            onClick={() => {
              handleClick(history.indexOf(item));
            }}>
            <Card sx={{ padding: "8%", margin: "2%" }}>
              {item.searchName}
            </Card>
          </Button>
        ))}
      </Stack>
    </Box>
  )
}
