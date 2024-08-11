import {
  Box,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { Link } from 'react-router-dom';
import { sideBarMenu } from "../../utils/constant";

const Sidebar = () => {
  const role = localStorage.getItem("role") || "owner";

  return (
    <Box sx={{ p: 1, height: "97%" }}>
      <Box
        sx={{
          backgroundColor: "#171B36",
          color: "white",
          borderRadius: 2,
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: 2,
            pt: 1,
            mb: 2,
          }}
        >
          <MenuIcon />
          <LocalLibraryIcon sx={{ width: 35, height: 35, color: "#115293" }} />
          <Typography sx={{ fontSize: 20, color: "#115293" }}>
            Book Rent
          </Typography>
        </Box>

        <List sx={{ px: 1 }}>
          {sideBarMenu.map((item, index) => {
            // Update the title for the "Login as" item based on the role
            const title = item.title === "Login as" ? `${item.title} ${role === "admin" ? "Owner" : "Admin"}` : item.title;
            
            return (
              <Box key={index}>
                {index === 5 && <Divider sx={{ my: 2 }} />}
                <Link
                  to={item.path}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        "&:hover": {
                          backgroundColor: "#115293",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          color: "white",
                          fontSize: 20,
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={title}
                        sx={{
                          color: "white",
                          fontSize: 12,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              </Box>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
