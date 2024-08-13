import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'
import AddBook from '../Forms/AddBook'

function AddBookPopUp({ isDialogOpen, handleDialogClose, newBook, handleFormChange, handleFormSubmit }) {
  return (
    <Dialog
    open={isDialogOpen}
    onClose={handleDialogClose}
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      ml: 20,
    }}
  >
    <DialogTitle
      sx={{
        width: 400,
        textAlign: "center",
        color: "GrayText",
      }}
    >
      Add New Book
    </DialogTitle>
    <DialogContent
      sx={{
        width: 400,
      }}
    >
      <AddBook newBook={newBook} handleFormChange={handleFormChange} />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleDialogClose}>Cancel</Button>
      <Button onClick={handleFormSubmit}>Save</Button>
    </DialogActions>
  </Dialog>
  )
}

export default AddBookPopUp