import React, { useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useFilterBooks } from '../hooks';
import CustomTable from '../components/Tables/Table';
import { AdminBook } from '../components/Tables/Columuns/AdminBook';

export default function BookList() {
  const [filters, setFilters] = useState([]);

  const { data, error, isLoading } = useFilterBooks({
    ...filters.reduce((acc, filter) => {
      acc[filter.id] = filter.value;
      return acc;
    }
    , {})
  });


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
    <Box>
      <CustomTable
        columns={AdminBook}
        data={data}
        maxHeight="470px"
        title="List of Books"
        setFilters={setFilters}
        filters={filters}
      />
    </Box>
  );
}
