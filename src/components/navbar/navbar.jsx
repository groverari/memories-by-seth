import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navbar.styles.scss'
//import sendEmail from '../mailer/mailer'
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
    <div className="nav">
      <div className="header">
        <div className="site-title-wrapper">
          <h1 className="site-title">Memories By Seth</h1>
        </div>
        <div className="links-container">
          <Link className="navbar-link" to="/home">
            Home
          </Link>
          <Link className="navbar-link" to="/services">
            Services
          </Link>
          <Link className="navbar-link" to="/gallery">
            Gallery
          </Link>

          <Button
            className="contact-btn"
            onClick={handleOpen}
            variant="outlined"
          >
            <p>Contact Me</p>
          </Button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="contact-modal">
          <h1>Contact Me</h1>
          <h2>Seth's Phone Number here</h2>
        </Box>
      </Modal>
      <Outlet className="content" />
    </div>
  )
}

export default NavBar
