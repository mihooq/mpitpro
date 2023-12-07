import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import TemporaryDrawer from '../menu'
import Divider from '@mui/material/Divider'
import Link from 'next/link'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <TemporaryDrawer></TemporaryDrawer>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mpit
          </Typography>
          <Link href={'/signin'} color="inherit">Sign In</Link>
          <Divider/>
          <Link href={'/signup'} color="inherit">Sign Up</Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}