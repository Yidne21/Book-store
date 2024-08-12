import CustomChart from "../Chart/Chart";
import CustomPie from "../Chart/PieChart";
import Revenue from "./Revenue";
import { Box, Typography, CircularProgress } from "@mui/material";
import React from "react";
import CustomTable from "../Tables/Table";
import {AdminLiveBook} from "../Tables/Columuns/AdminLiveBook";
import { useFilterBooks } from "../../hooks";
import { useState } from "react";

const AdminDashboard = () => {
  const [filters, setFilters] = useState([]);

  const { data, error, isLoading } = useFilterBooks({
    bookStatus: "approved",
    ...filters.reduce((acc, filter) => {
      acc[filter.id] = filter.value;
      return acc;
    }
    , {})
  });

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" mt={2}>
        <Typography color="error">Error fetching books: {error.message}</Typography>
      </Box>
    );
  }

  
  return (
    <Box sx={{ display: "flex", gap: 2 , flex: 1}}>
      {/* Left */}
      <Box
        sx={{
          p: 2,
          flex: 1,
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Typography sx={{ fontWeight: 600, opacity: 0.8 }}>
          This Month statistics
        </Typography>
        <Typography sx={{ fontSize: 14, opacity: 0.6 }}>
          Tue, 14 Nov, 2024, 11:30
        </Typography>
        <Revenue />
        <Box
          sx={{
            mt: 3,

            borderRadius: 2,
            backgroundColor: "#FDFDFD",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          }}
        >
          <CustomPie />
        </Box>
      </Box>

      {/* Right */}
      <Box sx={{ flex: 3 }}>
        <CustomTable columns={AdminLiveBook} data={data} maxHeight="300px"
          title="Live Book status"
          setFilters={setFilters}
          filters={filters}
          />
        <Box
          sx={{
            mt: 2,
            p: 3,
            borderRadius: 2,
            width: "100%",
            height: "350px",
            backgroundColor: "white",
          }}
        >
          <CustomChart />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;