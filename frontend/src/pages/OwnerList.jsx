import React from 'react'
import { adminOwner } from "../components/Tables/Columuns/AdminOwner";
import CustomTable from "../components/Tables/Table";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useGetListOfOwners } from '../hooks';


function OwnerList() {

  const { data, error, isLoading } = useGetListOfOwners();

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
        <Typography color="error">Error fetching owners: {error.message}</Typography>
      </Box>
    );
  }
  
  return (
    <Box>
    <CustomTable
      columns={adminOwner}
      data={data}
      maxHeight="470px"
      title="List of Books"
    />
  </Box>
  )
}

export default OwnerList