import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navbar.styles.scss'
import { Button, Modal, Box } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

function NavBar() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <div>
      <div className="header">
        <div className="site-title-wrapper">
          <h1 className="site-title">Memories By Seth</h1>
          <Button
            className="contact-btn"
            onClick={handleOpen}
            variant="outlined"
          >
            Contact Me
          </Button>
        </div>
        <div className="links-container">
          <Link className="navbar-link">
            <p>Home</p>
          </Link>
          <Link className="navbar-link">
            <p>Services</p>
          </Link>
          <Link className="navbar-link">
            <p>Gallery</p>
          </Link>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Contact Me</h1>
          <form>
            <label>Email:</label>
            <input type="text" />
            <br />
            <label>Describe Your Request: </label>
            <br />
            <input type="textarea" />
            <br />
            <input type="submit" />
          </form>
        </Box>
      </Modal>
      <Outlet />
    </div>
  )
}

export default NavBar
