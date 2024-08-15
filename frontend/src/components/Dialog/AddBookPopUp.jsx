import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'
import AddBook from '../Forms/AddBook'
import { addBookSchema } from "../../utils/validation";


function AddBookPopUp({ isDialogOpen, handleDialogClose, newBook, handleFormChange, isEdit }) {
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const result = addBookSchema.safeParse(newBook);
    if (!result.success) {
      const errors = result.error.errors.reduce((acc, error) => {
        acc[error.path[0]] = error.message;
        return acc;
      }, {});
      setFormErrors(errors);
      return false;
    }
    handleDialogClose();
    return true;
  }

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
      <AddBook newBook={newBook} handleFormChange={handleFormChange} formErrors={formErrors}/>
    </DialogContent>
    <DialogActions sx={{
      mx: 2,
    }}>
      <Button onClick={validateForm} variant="contained" fullWidth>{
        isEdit ? "Edit" : "Add"
        }</Button>
    </DialogActions>
  </Dialog>
  )
}

export default AddBookPopUp