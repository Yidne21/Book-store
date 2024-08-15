import { Box, Switch } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { useUpdateBookStatus } from "../../../hooks";
import React from "react";

const label = { inputProps: { "aria-label": "Switch demo" } };

export const AdminBook = [
  {
    accessorKey: "bookNumber",
    header: "No.",
    size: 40,
  },
  {
    accessorKey: "author",
    header: "Author",
    size: 40,
  },
  {
    accessorKey: "User.username",
    header: "Owner",
    size: 150,
    Cell: ({ renderedCellValue }) => (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box>{renderedCellValue}</Box>
      </Box>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    size: 200,
  },
  {
    accessorKey: "title",
    header: "Book Name ",
    size: 200,
  },
  {
    accessorKey: "status",
    header: "Status",
    size: 150,
    Cell: ({ row }) => {
      const { id, status } = row.original;
      const [isApproving, setIsApproving] = React.useState(false);
      const mutation = useUpdateBookStatus();

      const isApproved = status === "approved";

      const handleSwitchChange = (event) => {
        setIsApproving(true);
        const newStatus = event.target.checked ? "approved" : "unapproved";
        mutation.mutate(
          { bookId: id, status: newStatus },
          {
            onSuccess: () => {
              setIsApproving(false);
            },
            onError: (error) => {
              setIsApproving(false);
            },
          }
        );
      };

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
            onChange={handleSwitchChange}
            disabled={isApproving}
            style={{ cursor: "pointer" }}
          />
        </Box>
      );
    },
  },
];
