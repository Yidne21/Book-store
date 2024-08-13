import React from "react";
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

function CategorySelect({ categories, name, handleChange }) {
  return (
    <Autocomplete
      options={categories}
      getOptionLabel={(category) => category.name}
      value={categories.find((category) => category.name === name.category) || null}
      onChange={(event, newValue) => handleChange({ target: { value: newValue ? newValue.name : '' } }, 'category')}
      renderInput={(params) => <TextField {...params} label="Category" variant="filled" fullWidth />}
      fullWidth
    />
  );
}

export default CategorySelect;
