import CustomChart from "../Chart/Chart";
import CustomPie from "../Chart/PieChart";
import Revenue from "./Revenue";
import { Box, Typography, CircularProgress } from "@mui/material";
import React from "react";
import CustomTable from "../Tables/Table";
import { AdminLiveBook } from "../Tables/Columuns/AdminLiveBook";
import { useState } from "react";
import {
  useGetCategoryAnalysis,
  useTotalIncome,
  useFilterBooks,
  useDebounce
} from "../../hooks";


const AdminDashboard = () => {
  const [filters, setFilters] = useState([]);
  const [filter, setFilter] = useState({});

  const handleFilterChange = (newFilters) => {
    const transformedFilters = newFilters().reduce((acc, filter) => {
      if (filter.value) {
        acc[filter.id] = filter.value;
      }
      return acc;
    }, {});
  
    setFilter(transformedFilters);
    setFilters(newFilters);
  };

  const debouncedFilter = useDebounce(filter, 1000); // Adjust the delay as needed (500ms in this example)


  const { data, error, isLoading } = useFilterBooks({
    ...debouncedFilter,
  });

  const { data: categoryAnalysis, isLoading: isCategoryAnalyLoading } =
    useGetCategoryAnalysis();

  const { data: totalIncome, isLoading: isIncomeLoading } = useTotalIncome();

  if (isCategoryAnalyLoading || isIncomeLoading || isLoading) {
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

  const CustomPieData = categoryAnalysis.map((item) => ({
    value: item.count,
    label: item.category,
    color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`,
  }));


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
    <Box sx={{ display: "flex", gap: 2, flex: 1 }}>
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
        <Revenue isdown={false} balance={totalIncome.totalIncome}/>
        <Box
          sx={{
            mt: 3,

            borderRadius: 2,
            backgroundColor: "#FDFDFD",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          }}
        >
          <CustomPie data={CustomPieData} />
        </Box>
      </Box>

      {/* Right */}
      <Box sx={{ flex: 3 }}>
        <CustomTable
          columns={AdminLiveBook}
          data={data}
          maxHeight="300px"
          title="Live Book status"
          setFilters={handleFilterChange}
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
