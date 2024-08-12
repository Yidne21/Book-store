import { Box, Button, Switch } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";


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

  {
    accessorKey: "action",
    header: "Action ",
    size: 200,
    Cell: () => (
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <VisibilityIcon />
          <DeleteIcon sx={{ color: "red" }} />
        </Box>

        <Button variant="contained" size="small">
          Contained
        </Button>
      </Box>
    ),
  },
];