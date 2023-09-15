import React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const selectStyle = {
  backgroundColor:'var(--black)',
  '& .MuiSelect-icon': {
    color: 'white !important',
    '&:hover': {
      color: 'blue !important',
    },
  },
  '& .MuiSelect-select': {
    color: 'white !important',
  },
};

const HeaderDropDown = ({ onLogout }) => {

  return (
    <div style={{display:'flex',flexDirection:'row'}}>
     
        <Link to="/profile/0"className="link">
        <AccountCircleIcon style={{ color: '#ffff',fontSize:'30px',marginTop:'5px' }} />
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
