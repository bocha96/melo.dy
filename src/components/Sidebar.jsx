import React from 'react';
import { Box, Button, List, ListItem, ListItemIcon, Stack, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';

export const Sidebar = (props) => {
  const history = props.history;

  const handleClick = (index) => props.moveTo(index);

  return (
    <Box flex={2} sx={{ width: "280px", position: "fixed" }}>
      <Typography margin="5% 12% 0%" variant="h6" color="GrayText">
        Search history:
      </Typography>
      <List>
        <Stack>
          {history.map((item, index) => (
            <ListItem key={index} onClick={() => handleClick(history.indexOf(item))}>
              <Button fullWidth style={{ justifyContent: "stretch" }}>
                <ListItemIcon>
                  <Search />
                </ListItemIcon>
                {item.searchName}
              </Button>
            </ListItem>
          ))}
        </Stack>
      </List>
    </Box>
  )
}
