import React from 'react';
import { Box, Button, List, ListItem, ListItemIcon, Stack } from '@mui/material';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';

export const Sidebar = (props) => {
  const history = props.history;

  const handleClick = (index)=> props.moveTo(index);

  return (
    <Box flex={2}>
      <List>
        <Stack justifyContent="stretch">
          {history.map((item, index)=>(
            <ListItem key={index}>
              <Button onClick={()=>handleClick(history.indexOf(item))}>
                <ListItemIcon>
                  <AccessibleForwardIcon />
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
