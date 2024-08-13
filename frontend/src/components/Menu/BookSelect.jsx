import React from 'react';
import { Box, FormControl, TextField, Button, MenuItem } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

function BookSelect({ books, selectedBookId, bookId, handleChange, handleDialogOpen }) {
  return (
    <Box sx={{ width: 400 }}>
      <FormControl fullWidth variant="filled">
        <Autocomplete
          id="book-autocomplete"
          options={books}
          getOptionLabel={(book) => book.title}
          value={books.find(book => book.id === bookId) || selectedBookId || null}
          onChange={(event, newValue) => handleChange({ target: { value: newValue ? newValue.id : '' } })}
          renderInput={(params) => <TextField {...params} label="Search Book By Name" variant="filled" />}
        />

        <MenuItem onClick={handleDialogOpen}>
          <Button sx={{ width: "100%", mt: 2 }}>Add</Button>
        </MenuItem>
      </FormControl>
    </Box>
  );
}

export default BookSelect;
