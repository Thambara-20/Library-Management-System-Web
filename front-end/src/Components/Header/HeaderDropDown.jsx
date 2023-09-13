import React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const selectStyle = {
 
  '& .MuiSelect-icon': {
    color: '#4066ff',
    textSize : '1px'
  },
  '& .MuiSelect-select': {
    Text:'none',
    color: '#4066ff',
    textSize : '2px',}
    
};

const HeaderDropDown = ({ onLogout }) => {

  return (
    <div>
     
        <Link to="/profile/0"className="link">
        <AccountCircleIcon style={{ color: '#2949c6',fontSize:'30px' }} />
        </Link>
        <Select className="selecter" sx={selectStyle} displayEmpty value=''>
          <Link to="/profile/0"className="link">
            <MenuItem className="menuitem">Profile
            </MenuItem>
          </Link>
          <Link to="/profile/1"className="link">
            <MenuItem className="menuitem"> My Reservations
            </MenuItem>
          </Link>
          <Link to="/profile/4"className="link">
            <MenuItem className="menuitem">Notifications
            </MenuItem>
          </Link>
          <Link className="link">
            <MenuItem  onClick={() => onLogout()} > Log Out
            </MenuItem>
          </Link>

        </Select>

    </div>
  );
};

export default HeaderDropDown;
