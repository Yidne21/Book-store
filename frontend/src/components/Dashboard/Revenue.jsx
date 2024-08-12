import { Box, Divider, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Revenue = () => {
  const down = false;
  return (
    <Box
      sx={{
        backgroundColor: "#FDFDFD",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        borderRadius: 1,
        p: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          justifyContent: "space-between",
          mb: 1,
        }}
      >
        <Typography sx={{color: "GrayText"}}>Income</Typography>
        <Typography
          variant="body2"
          sx={{
            backgroundColor: "lightgray",
            p: 0.5,
            borderRadius: "10%",
            color: "GrayText",
          }}
        >
          This Month
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          mt: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontWeight: 800, fontSize: 24 }}>
          ETB 9460.00
        </Typography>
        <Box
          sx={{
            mt: 1,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Box>
            {down ? (
              <ArrowDownwardIcon sx={{ color: "red", height: 14, width: 14 }} />
            ) : (
              <ArrowUpwardIcon sx={{ color: "green", height: 14, width: 14 }} />
            )}
          </Box>
          <Typography variant="body2" sx={down ? {color: "red"}: {color: "green"}}>1.57%</Typography>
        </Box>
      </Box>
      <Box>
        <Typography sx={{ fontSize: 12, opacity: 0.8 }}>
          Compered to ETB 9940 last month
        </Typography>
        <Box
          sx={{
            mt: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Typography sx={{ fontSize: 12, fontWeight: 600 }}>
            Last Month Income
          </Typography>
          <Typography sx={{ fontSize: 12, fontWeight: 600 }}>
            ETB 5658.00
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Revenue;
