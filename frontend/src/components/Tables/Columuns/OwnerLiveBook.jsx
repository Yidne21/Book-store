import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useDeleteBook } from "../../../hooks";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom for navigation
import { CircularProgress } from "@mui/material";
export const ownerLiveBook = [
  {
    header: "No.",
    size: 10,
    Cell: ({ row }) => <Box sx={{ width: 2 }}>{row.index + 1}</Box>,
  },
  {
    accessorKey: "bookNumber",
    header: "Book no.",
    size: 30,
    Cell: ({ renderedCellValue }) => (
      <Box
        sx={{
          backgroundColor: "var(--softbg)",
          p: 0.3,
          borderRadius: "10%",
          textAlign: "center",
        }}
      >
        {renderedCellValue}
      </Box>
    ),
  },
  {
    accessorKey: "title",
    header: "Book Name",
    size: 80,
    Cell: ({ renderedCellValue }) => (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box>{renderedCellValue}</Box>
      </Box>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    size: 40,
    Cell: ({ renderedCellValue }) => (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
          sx={{
            p: 0.3,
            borderRadius: "50%",
            border: `1px solid ${renderedCellValue === 'approved' ? 'green' : 'red'}`,
          }}
        >
          <Box
            sx={{
              width: 10,
              height: 10,
              backgroundColor: renderedCellValue === 'approved' ? 'green' : 'red',
              borderRadius: "50%",
            }}
          />
        </Box>
        <Box>{renderedCellValue}</Box>
      </Box>
    ),
  },
  {
    accessorKey: "rentPrice",
    header: "Price",
    size: 40,
    Cell: ({ renderedCellValue }) => (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box>{renderedCellValue.toFixed(2)} Birr</Box>
      </Box>
    ),
  },
  {
    accessorKey: "action",
    header: "Action",
    size: 100,
    Cell: ({ row }) => {
      const { id } = row.original;
      const bookId = id;
      const navigate = useNavigate();
      const deleteBook = useDeleteBook();
      const [isDeleting, setIsDeleting] = React.useState(false);

      const handleEditClick = () => {
        navigate(`/dashboard/books/${bookId}`);
      };

      const handleDeleteClick = () => {
        setIsDeleting(true);
        deleteBook.mutate(bookId, {
          onSuccess: () => {
            setIsDeleting(false);
          },
          onError: () => {
            setIsDeleting(false);
          },
        });
      };

      return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <EditIcon onClick={handleEditClick} style={{ cursor: 'pointer' }} />
          </Box>
          {isDeleting ? (
            <CircularProgress size={20} />
          ) : (
            <DeleteIcon onClick={handleDeleteClick} style={{ cursor: 'pointer' }} color="error" />
          )}
          <Box>
          </Box>
        </Box>
      );
    },
  },
];
