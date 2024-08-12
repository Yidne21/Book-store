import { Box, Divider, Typography } from "@mui/material";
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import SignUpForm from "../components/Forms/SignUpForm";


export default function Home() {
  return (
        <Box sx={{ display: "flex", height: "100vh"}}>
          {/* Left */}
          <Box
            sx={{
              backgroundColor: "#171B36",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <ImportContactsOutlinedIcon sx={{ width: 200, height: 200, color: "white" }} />
          </Box>
          {/* Right */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              padding: 10,
              backgroundColor: "white",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <ImportContactsOutlinedIcon
                  sx={{ width: 50, height: 50, color: "#1e3c72" }}
                />
                <Typography sx={{ fontSize: 28, fontWeight: "bold", color: "#1e3c72", ml: 1 }}>Book Rent</Typography>
              </Box>
              <Typography sx={{ mt: 2, fontSize: 20, color: "#555" }}>
                Signup as Owner
              </Typography>
              <Divider variant="fullWidth" sx={{ mb: 3, bgcolor: "#ddd" }} />
              <SignUpForm />
            </Box>
          </Box>
        </Box>
  );
}