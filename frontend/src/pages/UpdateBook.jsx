import React, { useState, useEffect } from "react";
import { Box, Typography, CircularProgress, Button } from "@mui/material";
import { useGetBookById, useUpdateBook } from "../hooks";
import { useParams } from "react-router-dom";
import BookSelect from "../components/Menu/BookSelect";
import UpdateBookForm from "../components/Forms/UpdateBookForm";
import AddBookPopUp from "../components/Dialog/AddBookPopUp";
import Success from "../components/Dialog/Success";

export default function UpdateBook() {
  const { bookId } = useParams();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);


  const { data: book, error, isLoading } = useGetBookById(bookId);
  const [updatedBook, setUpdatedBook] = useState({
    title: "",
    author: "",
    category: "",
    quantity: "",
    rentPrice: "",
    file: "",
  });

  useEffect(() => {
    if (book) {
      setUpdatedBook({
        title: book.title,
        author: book.author,
        category: book.category,
        quantity: book.quantity,
        rentPrice: book.rentPrice,
        file: "",
      });
    }
  }, [book]);

  const updateBookMutation = useUpdateBook();

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleAdd = () => {
    setIsDialogOpen(false);
  };

  const handleSuccessClose = () => {
    setIsSuccess(false);
  };

  const handleSuccessOpen = () => {
    setIsSuccess(true);
  };

  useEffect(() => {
    if (updateBookMutation.isSuccess) {
      handleSuccessOpen();
    }
  }
  , [updateBookMutation.isSuccess]);

  const handleFormChange = (event, name = null) => {
    const fieldName = name || event.target.name;
    const value = event.target.files
      ? event.target.files[0]
      : event.target.value;
    setUpdatedBook((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSubmit = () => {
    setIsUpdating(true);
    const { file, ...updatedDetails } = updatedBook;
    updateBookMutation.mutate({ bookId, updatedDetails, file }, {
      onSuccess: () => {
        setIsUpdating(false);
      },
      onError: () => {
        setIsUpdating(false);
      },
    });
    setIsDialogOpen(false);
  };

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" mt={2}>
        <Typography color="error">
          Error fetching book: {error.message}
        </Typography>
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
        p: 4,
      }}
    >
      <Typography
        sx={{
          fontSize: 24,
          mb: 2,
        }}
      >
        Update Book
      </Typography>
      <BookSelect
        books={[book]}
        selectedBookId={bookId}
        bookId={bookId}
        isEdit={true}
        handleDialogOpen={handleDialogOpen}
      />
      <UpdateBookForm book={updatedBook} onChange={handleFormChange} />
      <AddBookPopUp
        isDialogOpen={isDialogOpen}
        handleDialogClose={handleDialogClose}
        newBook={updatedBook}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleAdd}
      />
            <Success
        isDialogOpen={isSuccess}
        handleDialogClose={handleSuccessClose}
        message="You have updated the book successfully."
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 5, width: 300, height: 50, borderRadius: 10 }}
        onClick={handleSubmit}
        disabled={isUpdating}
      >
        {isUpdating ? <CircularProgress size={24} color="primary" /> : "Update"}
      </Button>
    </Box>
  );
}
