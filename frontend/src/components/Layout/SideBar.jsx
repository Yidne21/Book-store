import React from 'react';
import {
  Box,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import { sideBarMenu } from '../../utils/constant';
import { defineAbilitiesFor } from '../../abilities/abilities';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const role = localStorage.getItem('role');
  const ability = defineAbilitiesFor(role);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear(); 
    navigate('/login');
  };

  return (
    <Box sx={{ p: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          backgroundColor: '#171B36',
          color: 'white',
          borderRadius: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          {/* Header Section */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              pt: 1,
              mb: 2,
            }}
          >
            <MenuIcon />
            <ImportContactsOutlinedIcon sx={{ width: 35, height: 35, color: '#117693' }} />
            <Typography sx={{ fontSize: 20, color: '#117693' }}>Book Rent</Typography>
          </Box>

          {/* Menu Items Section */}
          <List sx={{ px: 1 }}>
            {sideBarMenu.map((item, index) => {
              if (ability.can('read', item.id)) {
                const title =
                  item.title === 'Login as'
                    ? `${item.title} ${role === 'admin' ? 'Owner' : 'Admin'}`
                    : item.title;

                return (
                  <Box key={index}>
                    {index === sideBarMenu.length - 3 && <Divider sx={{ my: 2 }} />}
                    <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <ListItem disablePadding>
                        <ListItemButton
                          sx={{
                            '&:hover': {
                              backgroundColor: '#115293',
                            },
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              color: 'white',
                              fontSize: 20,
                            }}
                          >
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={title}
                            sx={{
                              color: 'white',
                              fontSize: 12,
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  </Box>
                );
              }
              return null;
            })}
          </List>
        </Box>

        {/* Logout Button Section */}
        <Box sx={{ p: 2 }}>
          <Button
            variant="contained"
            color="error"
            startIcon={<ExitToAppIcon />}
            onClick={handleLogout}
            fullWidth
            sx={{
              backgroundColor: '#45495E',
              '&:hover': {
                backgroundColor: '#d32f2f',
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
