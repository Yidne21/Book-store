import React from "react";
import { Box, Button } from "@mui/material";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function CoverPhotoUpload({ book, onChange }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onChange({ target: { name: "file", value: file } });
  };

  return (
    <Box>
      <Button
        component="label"
        variant="text"
        startIcon={<FileUploadOutlinedIcon />}
        sx={{ mt: 2 }}
      >
        Upload Book Cover
        <VisuallyHiddenInput
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </Button>
      {book.file && <p>{book.file.name}</p>}
    </Box>
  );
}

export default CoverPhotoUpload;
