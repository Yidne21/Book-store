"use client";
import { Box } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";

export const ownerLiveBook =
  [
    {
      header: "No.",
      size: 10,
      Cell: ({ row }) => <Box sx={{
        width: 2,
      }}>{row.index + 1}</Box>,
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
          {/* <Image
            src="/woman.png"
            alt="woman"
            width={24}
            height={24}
            style={{ borderRadius: "50%", border: "1px solid grey" }}
          /> */}
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
              border: "1px solid red",
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                backgroundColor: "red",
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
    },
    {
      accessorKey: "action",
      header: "Action ",
      size: 100,
      Cell: () => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <EditIcon />
            <DeleteIcon sx={{ color: "red" }} />
          </Box>
        </Box>
      ),
    },
  ];