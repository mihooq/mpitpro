import { Data, userContext } from "@/lib/context"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import { useContext, useState } from "react"

export interface SimpleDialogProps {
  open: boolean
  selectedValue: Data
  onClose: (value: Data) => void
  property: keyof Required<Data>['data']
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props

  const handleClose = () => {
    onClose(selectedValue)
  }

  const handleListItemClick = (value: Data) => {
    onClose(value)
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
          <ListItem disableGutters>
            <ListItemButton onClick={() => handleListItemClick(selectedValue)}>
            </ListItemButton>
          </ListItem>
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick(selectedValue)}
          >

            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  )
}

export default function Profile() {
  const user = useContext(userContext)

  const [open, setOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(user)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (value: Data) => {
    setOpen(false)
    setSelectedValue(value)
  }

  return <List>
    <ListItem>
      <Grid>{ user.data?.firstname }</Grid>
      <Grid>
      <Button variant="outlined" onClick={handleClickOpen}>
        Change first name
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        property="firstname"
       />
      </Grid>
    </ListItem>
    <ListItem>
      <Grid>{ user.data?.lastname }</Grid>
      <Grid>
        <Button variant="outlined" onClick={handleClickOpen}>
          Change first name
        </Button>
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
          property="lastname"
        />
        </Grid>
    </ListItem>
    <ListItem>
      <Grid>{ user.data?.email }</Grid>
      <Grid>
        <Button variant="outlined" onClick={handleClickOpen}>
          Change first name
        </Button>
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
          property="email"
        />
      </Grid>
    </ListItem>
    <ListItem>
      <Grid>{ user.data?.balance }</Grid>
    </ListItem>
    <ListItem>
      <Grid>
        {
          user.data?.tasks.map((task, index) => (
            <Link key={index} href='/'>
              { task.name }
            </Link>
          ))
        }
      </Grid>
      <Grid></Grid>
    </ListItem>
  </List>
}