import {
  Box,
  Button,
  FormControl,
  TextField,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const UploadBook = () => {
  const [bookId, setBookId] = useState("");

  const handleChange = (event) => {
    setBookId(event.target.value);
  };
  return (
    <Box sx={
      {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }
    }>
      <Box sx={{ width: 400 }}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={bookId}
            label="Age"
            variant="filled"
            autoComplete="true"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <Button sx={{ width: "100%" }}>Add</Button>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          mt: 10  ,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 5,
        }}
      >
        <TextField
          id="filled-basic"
          label="Quantity"
          variant="outlined"
          type="number"
          fullWidth
        />
        <TextField
          id="filled-basic"
          label="Price"
          variant="outlined"
          type="number"
          fullWidth
        />
      </Box>
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      sx={{ mt: 5 }}
    >
      Upload Book Cover
      <VisuallyHiddenInput type="file" />
    </Button>

    <Button
      variant="contained"
      color="primary"
      sx={{ mt: 5, width: 300, height: 50,  borderRadius: 10 }}
    >
      Submit
    </Button>
    </Box>
  );
};

export default UploadBook;
