import React, { useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useFilterBooks } from "../hooks";
import CustomTable from "../components/Tables/Table";
import { AdminBook } from "../components/Tables/Columuns/AdminBook";
import { useDebounce } from "../hooks";

export default function BookList() {
  const [filter, setFilter] = useState({});
  const [filters, setFilters] = useState([]);

  const handleFilterChange = (newFilters) => {
    const transformedFilters = newFilters().reduce((acc, filter) => {
      if (filter.value) {
        acc[filter.id] = filter.value;
      }
      return acc;
    }, {});
  
    setFilter(transformedFilters);
    setFilters(newFilters);
  };
  
  const debouncedFilter = useDebounce(filter, 1000); // Adjust the delay as needed (500ms in this example)


  const { data, error, isLoading } = useFilterBooks({
    ...debouncedFilter,
  });

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
          Error fetching books: {error.message}
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <CustomTable
        columns={AdminBook}
        data={data}
        maxHeight="470px"
        title="List of Books"
        setFilters={handleFilterChange}
        filters={filters}
      />
    </Box>
  );
}
