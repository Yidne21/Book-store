import React from "react";
import { Box, TextField } from "@mui/material";
import { addBookFormData } from "../../utils/constant";
import { useGetCategoriesNames } from "../../hooks";
import CategorySelect from "../Menu/CategorySelect";

function AddBook({ newBook, handleFormChange }) {
  const { data: categories, isLoading: categoryLoading } = useGetCategoriesNames();

  if (categoryLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mt: 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {addBookFormData.map((item, index) => (
        <TextField
          key={index}
          id={item.id}
          name={item.name}
          label={item.label}
          value={newBook[item.name]}
          onChange={handleFormChange}
          variant="outlined"
          fullWidth
        />
      ))}
      <CategorySelect
        categories={categories}
        name={newBook}
        handleChange={handleFormChange}
      />
    </Box>
  );
}

export default AddBook;
