import React from 'react'
import { Box, Button } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete'

function AdminOwnerAction({ handleView, handleDelete, handleApprove, isApproved }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      <VisibilityIcon onClick={handleView} />
    </Box>
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      <DeleteIcon sx={{ color: "red" }} onClick={handleDelete} />
    </Box>
    <Button
      variant="contained"
      size="small"
      onClick={handleApprove}
      sx={{
        backgroundColor: isApproved ? "blue" : "gray",
      }}
    >
      {isApproved ? "Approved" : "Approve"}
    </Button>
  </Box>
  )
}

export default AdminOwnerAction