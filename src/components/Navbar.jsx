import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import EarbudsIcon from '@mui/icons-material/Earbuds';
import { Button, IconButton, styled } from '@mui/material'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})

export const Navbar = (props) => {
  const { token, setToken } = props;
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token")
  }
  return (
    <AppBar position="sticky" color="primary">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          <IconButton color="inherit">
            <EarbudsIcon />
          </IconButton>
          melo.dy
        </Typography>
        <IconButton color="inherit">
          <EarbudsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        </IconButton>
        {
          token ?
            <Button onClick={logout} variant='text' color='inherit'>Logout</Button>
            :
            <Button onClick={logout} variant='text' color='inherit'>LogIn</Button>

        }
      </StyledToolbar>
    </AppBar>
  )
}
