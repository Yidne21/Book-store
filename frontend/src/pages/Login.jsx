import { Box, Divider, Typography} from "@mui/material";
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import LoginForm from "../components/Forms/LoginForm";

export default function Login() {

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
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
        <ImportContactsOutlinedIcon
          sx={{
            width: 200,
            height: 200,
            color: "white",
          }}
        />
      </Box>

      {/* Right */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          padding: 4,
          backgroundColor: "white",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 400 }}>
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
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: "bold",
                color: "black",
                ml: 1,
              }}
            >
              Book Rent
            </Typography>
          </Box>
          <Typography sx={{ fontSize: 20, mb: 2, color: "black" }}>
            Login
          </Typography>
          <Divider sx={{ mb: 3, backgroundColor: "#ddd" }} />
          <LoginForm />
        </Box>
      </Box>
    </Box>
  );
}
