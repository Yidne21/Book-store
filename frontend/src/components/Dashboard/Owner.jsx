import CustomChart from "../Chart/Chart";
import CustomPie from "../Chart/PieChart";
import Revenue from "./Revenue";
import { Box, Typography, CircularProgress } from "@mui/material";
import React from "react";
import CustomTable from "../Tables/Table";
import { ownerLiveBook } from "../Tables/Columuns/OwnerLiveBook";
import {
  useMyLiveBooksCategoryAnalysis,
  useMyBooks,
  useMyBalance,
} from "../../hooks";

const OwnerDashboard = () => {
  const { data, error, isLoading } = useMyBooks();
  const { data: balanceData, isLoading: balanceLoading } = useMyBalance();
  const { data: categoryAnalysisData, isLoading: categoryAnalysisLoading } =
    useMyLiveBooksCategoryAnalysis();

  if (balanceLoading || categoryAnalysisLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  const CustomPieData = categoryAnalysisData.map((item) => ({
    value: item.count,
    label: item.category,
    color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`,
  }));

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" mt={2}>
        <Typography color="error">
          Error fetching books: {error.message}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
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
        <Typography sx={{ fontSize: 14, opacity: 0.6, mb: 5 }}>
          Tue, 14 Nov, 2024, 11:30
        </Typography>
        <Revenue isdown={false} balance={balanceData.balance} />
        <Box
          sx={{
            mt: 3,
            borderRadius: 2,
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            backgroundColor: "white",
          }}
        >
          <CustomPie data={CustomPieData} />
        </Box>
      </Box>

      {/* Right */}
      <Box sx={{ flex: 3 }}>
        <CustomTable
          columns={ownerLiveBook}
          data={data}
          maxHeight="300px"
          title="Live Book status"
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

export default OwnerDashboard;
