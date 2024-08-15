import React from "react";
import { Box, TextField, CircularProgress } from "@mui/material";
import { addBookFormData } from "../../utils/constant";
import { useGetCategoriesNames } from "../../hooks";
import CategorySelect from "../Menu/CategorySelect";

function AddBook({ newBook, handleFormChange, formErrors }) {
  const { data: categories, isLoading: categoryLoading } = useGetCategoriesNames();

  if (categoryLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <CircularProgress size={24}/>
      </Box>
    );
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
          type={item.type}
          onChange={handleFormChange}
          variant="outlined"
          fullWidth
          error={!!formErrors[item.name]} 
          helperText={formErrors[item.name]}
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
