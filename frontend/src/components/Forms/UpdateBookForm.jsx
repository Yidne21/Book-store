import React from "react";
import { Box, TextField } from "@mui/material";
import { updateBookFormData } from "../../utils/constant";
import CoverPhotoUpload from "../Button/CoverPhotoUpload";


function UpdateBookForm({ book, onChange }) {
  return (
    <Box 
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    }}
    >
      <Box
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 5,
        }}
      >
        {updateBookFormData.map((data) => (
          <TextField
            key={data.id}
            id={data.id}
            name={data.name}
            value={book[data.name]}
            onChange={onChange}
            label={data.label}
            type={data.type}
            variant="outlined"
            size="small"
            fullWidth
          />
        ))}
      </Box>
        <CoverPhotoUpload book={book} onChange={onChange}/>
    </Box>
  );
}

export default UpdateBookForm;
