import {
  Box,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import UpdateBook from "./UpdateBook";
import BookSelect from "../Menu/BookSelect";
import AddBookPopUp from "../Dialog/AddBookPopUp";
import { useCreateBook } from "../../hooks";
import Success from "../Dialog/Success";

const UploadBook = ({ books, selectedBookId }) => {
  const [bookId, setBookId] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    category: "",
    quantity: "",
    rentPrice: "",
    file: "",
  });

  const createBookMutation = useCreateBook();

  const handleChange = (event) => {
    setBookId(event.target.value);
  };

  const handleSuccessClose = () => {
    setIsSuccess(false);
  };

  const handleSuccessOpen = () => {
    setIsSuccess(true);
  };


  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleFormChange = (event, name = null) => {
    const fieldName = name || event.target.name;
    const value = event.target.files ? event.target.files[0] : event.target.value;
    setNewBook((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };
  
  

  const handleAdd = () => {
    setIsDialogOpen(false);
  };

  const handleSubmit = () => {
    const { file, ...bookDetails } = newBook;
    createBookMutation.mutate({ bookDetails, file });
    setIsDialogOpen(false);
  };

  useEffect(() => {
    if (createBookMutation.isSuccess) {
      handleSuccessOpen();
    }
  }
  , [createBookMutation.isSuccess]);


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
      <BookSelect
        books={books}
        selectedBookId={selectedBookId}
        bookId={bookId}
        handleChange={handleChange}
        handleDialogOpen={handleDialogOpen}
      />
      <UpdateBook 
      book={newBook} onChange={handleFormChange}/>
      <AddBookPopUp
        isDialogOpen={isDialogOpen}
        handleDialogClose={handleDialogClose}
        newBook={newBook}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleAdd}
      />
      <Success
        isDialogOpen={isSuccess}
        handleDialogClose={handleSuccessClose}
        message="You have uploaded book successfully. Wait until we approve it."
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 5, width: 300, height: 50, borderRadius: 10 }}
        onClick={handleSubmit}
        disabled={createBookMutation.isLoading}
      >
       {createBookMutation.isLoading ? "Uploading..." : "Submit"}
      </Button>
    </Box>
  );
};

export default UploadBook;
