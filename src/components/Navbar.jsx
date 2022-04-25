import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import EarbudsIcon from '@mui/icons-material/Earbuds';
import { IconButton, styled } from '@mui/material'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})

export const Navbar = () => {
  return (
        <AppBar position="sticky" color="primary">
            <StyledToolbar>
              <Typography variant="h6" sx={{display: {xs:"none", sm:"block"}}}>
              <IconButton color="inherit">
                <EarbudsIcon />
              </IconButton>
                  melo.dy
              </Typography>
              <IconButton color="inherit">
              <EarbudsIcon sx={{display: {xs:"block", sm:"none"}}}/>
              </IconButton>
              <Typography variant="a" component="h5">
                LOGIN
              </Typography>
            </StyledToolbar>
        </AppBar>
  )
}
