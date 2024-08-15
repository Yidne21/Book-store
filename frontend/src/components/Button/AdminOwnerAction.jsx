import React from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

function AdminOwnerAction({
  handleView,
  handleDelete,
  handleApprove,
  isApproved,
  isApproving,
  isDeleting,
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <VisibilityIcon onClick={handleView} style={{ cursor: "pointer" }} />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        {isDeleting ? (
          <CircularProgress size={20} />
        ) : (
          <DeleteIcon
            onClick={handleDelete}
            style={{ cursor: "pointer" }}
            color="error"
          />
        )}
      </Box>
      <Button
        variant="contained"
        size="small"
        onClick={handleApprove}
        sx={{
          backgroundColor: isApproved ? "blue" : "gray",
        }}
        disabled={isApproving}
      >
        {isApproved ? "Approved" : "Approve"}
      </Button>
    </Box>
  );
}

export default AdminOwnerAction;
