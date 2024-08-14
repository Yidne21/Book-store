import React from 'react'
import { Dialog, DialogContent, TextField, Box } from '@mui/material'

function OwnerDetail({open, handleClose, row}) {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <TextField
                  value={row.original.username}
                  id="outlined-basic"
                  label="Username"
                  type="email"
                  variant="outlined"
                />
                <TextField
                  value={row.original.email}
                  id="outlined-basic"
                  label="Email"
                  type="mail"
                  variant="outlined"
                />
                <TextField
                  value={row.original.location}
                  id="outlined-basic"
                  label="Location"
                  type="text"
                  variant="outlined"
                />
                <TextField
                  value={row.original.phone}
                  id="outlined-basic"
                  label="Phone Number"
                  type="Phone"
                  variant="outlined"
                />
              </Box>
            </DialogContent>
          </Dialog>
  )
}

export default OwnerDetail