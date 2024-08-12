import { Box, Switch } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import DoneIcon from "@mui/icons-material/Done";


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

    Cell: ({ renderedCellValue }) => (
      <Box
        sx={{
          backgroundColor: "#E6F3E6",
          py: 0.1,
          px: 1,
          gap: 0.5,
          borderRadius: "10%",
          display: "flex",
          alignItems: "center",
          color: "#14a514",
        }}
      >
        <DoneIcon sx={{ fontSize: 18 }} />
        {renderedCellValue}
        <Switch {...label} size="medium" color="success" />
      </Box>
    ),
  },
];