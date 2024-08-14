import { Box } from "@mui/material";


export const AdminLiveBook =
  [
    {
      header: "No.",
      size: 5,
      Cell: ({ row }) => <Box sx={{
        width: 2,
      }}>{row.index + 1}</Box>,
    },
    {
      accessorKey: "bookNumber",
      header: "Book no.",
      size: 5,
      Cell: ({ renderedCellValue }) => (
        <Box
          sx={{
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
      accessorKey: "User.username",
      header: "Owner",
      size: 140,
      Cell: ({ renderedCellValue }) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box>{renderedCellValue}</Box>
        </Box>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      size: 100,
      Cell: ({ row }) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              p: 0.3,
              borderRadius: "50%",
              border: `1px solid ${row.original.availableQuantity > 0 ? "green" : "red"}`,
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                backgroundColor: `${row.original.availableQuantity > 0 ? "green" : "red"}`,
                borderRadius: "50%",
              }}
            />
          </Box>
          <Box>{row.original.availableQuantity === 0 ? "Unavailable" : "Available"}</Box>
        </Box>
      ),
    },
    {
      accessorKey: "rentPrice",
      header: "Price",
      size: 20,
    },
  ];