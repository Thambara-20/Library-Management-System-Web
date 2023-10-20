import { Badge, Box, IconButton } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';
import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import auth from '../services/authService';

const Topbar = ({ searchQuery, setSearchQuery, handleSearch, isdashboard = false }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    auth.logout();
  };

  const open = Boolean(anchorEl);

  return (
    <Box display="flex" sx={{ background: `linear-gradient(90deg, ${grey[900]} 50%, rgb(255, 255, 255) 100%)` }} justifyContent="space-between" p={2}>
      {/* Search Bar */}
      {!isdashboard ? (<Box display="flex"  >
        <InputBase
          sx={{ ml: 2, flex: 1, color: 'white' }}
          label="Search"
          variant="outlined"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          color='white'


        />
        <IconButton type="button" sx={{ p: 1, color: 'white' }} onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Box>) : <Box display="flex"></Box>}

      {/* Icons */}
      <Box display="flex">

        <IconButton>

        </IconButton>
        <IconButton onClick={handleClick}>
          <PersonOutlinedIcon
            sx={{
              variant: "outlined",
              color: "black",
            }}
          />
        </IconButton>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Button
            style={{ color: 'black' }}
            onClick={handleLogout} 
          >
            <Link to="/"> {/* Use the Link component to navigate to the home page */}
              <LogoutIcon style={{ color: 'black' }} />
              Logout
            </Link>
          </Button>
        </Popover>

      </Box>
    </Box>
  );
};

export default Topbar;
