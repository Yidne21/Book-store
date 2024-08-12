import React from 'react'
import UploadBook from "../components/Forms/UploadBook";
import { Box, Typography } from "@mui/material";

export default function BookUpload() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography sx={
        {
          fontSize: 24,
          mb: 2,
        }
      }>Upload New Book</Typography>
      <UploadBook />
    </Box>
  );
}