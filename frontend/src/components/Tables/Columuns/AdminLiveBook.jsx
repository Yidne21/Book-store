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
      size: 100,
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
      size: 20,
    },
  ];