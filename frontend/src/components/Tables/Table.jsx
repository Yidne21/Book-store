import React from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Typography } from "@mui/material";

function CustomTable({
  columns,
  data,
  maxHeight,
  title,
  setFilters,
  filters,
}) {
  const table = useMaterialReactTable({
    columns,
    data,
    enableSorting: false,
    enableColumnActions: false,
    enablePagination: false,
    enableTableFooter: false,
    enableStickyFooter: false,
    enableBottomToolbar: false,
    manualFiltering: true,
    muiTableContainerProps: {
      sx: {
        maxHeight: maxHeight,
        p: 2,
      },
    },
    muiTableHeadCellProps: {
      sx: {
        fontWeight: "normal",
      },
    },
    onColumnFiltersChange: setFilters,
    state: { columnFilters: filters }, // Use 'columnFilters' instead of 'filters'
    renderTopToolbarCustomActions: () => (
      <Typography
        variant="h6"
        sx={{ fontWeight: 600, ml: 3, mt: 3, mb: -3, fontSize: 16 }}
      >
        {title}
      </Typography>
    ),
  });

  return <MaterialReactTable table={table} />;
}

export default CustomTable;
