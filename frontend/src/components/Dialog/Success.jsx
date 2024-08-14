import React from 'react'
import { Dialog, DialogContent, Button, Box, Typography } from '@mui/material'
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';

function Success({ isDialogOpen, handleDialogClose, message }) {
  return (
    <Dialog
    open={isDialogOpen}
    onClose={handleDialogClose}
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      ml: 20,
      borderRadius: 20,
    }}
  >
    <DialogContent
      sx={{
        width: "100%",
        borderRadius: 20,
      }}
    >
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 4,
        }}>
            <InsertEmoticonOutlinedIcon sx={{ fontSize: 80 }} color="primary" />
            <Typography variant="h6" align="center" sx={{ mt: 2 }}>
                Congrats!
            </Typography>
            <Typography variant="body2" align="center" sx={{ mt: 2 }} color="GrayText">
                {message}
            </Typography>
            <Button sx={{
                mt: 2,
                p: 1,
            }} onClick={handleDialogClose} variant="contained" color="primary">Ok</Button>
        </Box>
    </DialogContent>
  </Dialog>
  )
}

export default Success