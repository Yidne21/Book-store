import {
  Box,
  Switch,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import React, { useState } from "react";
import { useUpdateOwnerStatus } from "../../../hooks";
import OwnerDetail from "../../Dialog/OwnerDetail";
import AdminOwnerAction from "../../Button/AdminOwnerAction";

const label = { inputProps: { "aria-label": "Switch demo" } };

export const adminOwner = [
  {
    accessorKey: "no",
    header: "No.",
    size: 40,
    Cell: ({ row }) => <span>{row.index + 1}</span>,
  },
  {
    accessorKey: "username",
    header: "Owner",
    size: 150,
    Cell: ({ renderedCellValue }) => (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box>{renderedCellValue}</Box>
      </Box>
    ),
  },
  {
    accessorKey: "uploads",
    header: "Uploads",
    size: 40,
  },
  {
    accessorKey: "location",
    header: "Location",
    size: 200,
  },
  {
    accessorKey: "status",
    header: "Status",
    size: 150,
    Cell: ({ row }) => {
      const { status } = row.original;
      const isApproved = status === "approved";

      return (
        <Box
          sx={{
            backgroundColor: isApproved ? "#E6F3E6" : "#F3E6E6",
            py: 0.1,
            px: 1,
            gap: 0.5,
            borderRadius: "10%",
            display: "flex",
            alignItems: "center",
            color: isApproved ? "#14a514" : "#a51414",
          }}
        >
          <DoneIcon sx={{ fontSize: 18 }} />
          {isApproved ? "approved" : "unapproved"}
          <Switch
            {...label}
            size="medium"
            color="success"
            checked={isApproved}
            onChange={() => {}}
            disabled
          />
        </Box>
      );
    },
  },
  {
    accessorKey: "action",
    header: "Action",
    size: 200,
    Cell: ({ row }) => {
      const { id, status } = row.original;
      const mutation = useUpdateOwnerStatus();
      const [open, setOpen] = useState(false);

      const isApproved = status === "approved";

      const handleView = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

      const handleDelete = () => {
        console.log(`Deleting owner with id: ${id}`);
        // Your delete logic here
      };

      const handleApprove = () => {
        const newStatus = isApproved ? "unapproved" : "approved";
        mutation.mutate({ ownerId: id, status: newStatus });
      };

      return (
        <>
          <AdminOwnerAction
            handleView={handleView}
            handleDelete={handleDelete}
            handleApprove={handleApprove}
            isApproved={isApproved}
          />
          <OwnerDetail open={open} handleClose={handleClose} row={row} />
        </>
      );
    },
  },
];
