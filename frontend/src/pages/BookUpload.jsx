import React from 'react'
import UploadBook from "../components/Forms/UploadBook";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useGetBooksNamesWithIds, } from '../hooks';



export default function BookUpload() {
  const { data: books, error, isLoading  } = useGetBooksNamesWithIds();

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" mt={2}>
        <Typography color="error">Error fetching books: {error.message}</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        p: 4
      }}
    >
      <Typography sx={
        {
          fontSize: 24,
          mb: 2,
        }
      }>Upload New Book</Typography>
      <UploadBook books={books}/>
    </Box>
  );
}