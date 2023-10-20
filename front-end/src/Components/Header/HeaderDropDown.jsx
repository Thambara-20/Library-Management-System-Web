import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import {Badge }from '@mui/material';
import {countUnreadNotifications} from "../../services/notificationService"

const selectStyle = {
  backgroundColor: 'var(--black) !important',
  '& .MuiSelect-icon': {
    color: 'white !important',
    '&:hover': {
      color: 'blue !important',
    },
  },
  '& .MuiSelect-select': {
    color: 'black !important',
  },
};





const HeaderDropDown = ({ onLogout }) => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await countUnreadNotifications();
        console.log(response)
        setCount(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [count]);


  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <Link to="/profile/0" className="link">
        <Badge badgeContent={count} color="secondary">
          <AccountCircleIcon style={{ color: '#ffff', fontSize: '30px', marginTop: '5px' }} />
        </Badge>
      </Link>
      <Select className="selecter" sx={selectStyle} displayEmpty value=''>
        <Link to="/profile/0" className="link">
          <MenuItem className="menuitem">Profile
          </MenuItem>
        </Link>
        <Link to="/profile/1" className="link">
          <MenuItem className="menuitem"> My Reservations
          </MenuItem>
        </Link>
        <Link to="/profile/4" className="link">
          <MenuItem className="menuitem">Notifications
          </MenuItem>
        </Link>
        <Link className="link">
          <MenuItem onClick={() => onLogout()} > Log Out
          </MenuItem>
        </Link>

      </Select>

    </div>
  );
};

export default HeaderDropDown;
