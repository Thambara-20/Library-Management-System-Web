import { Badge, Box, IconButton} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';

const Topbar = ({ searchQuery, setSearchQuery, handleSearch }) => {

  return (
    <Box display="flex" sx={{ background: `linear-gradient(90deg, ${grey[900]} 50%, rgb(255, 255, 255) 100%)` }} justifyContent="space-between" p={2}>
      {/* Search Bar */}
      <Box display="flex"  >
        <InputBase
          sx={{ ml: 2, flex: 1, color:'white' }}
          label="Search"
          variant="outlined"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value) }
          color='white'
         
          
        />
        <IconButton type="button" sx={{ p: 1 , color:'white'}} onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex">
  
        {/* <IconButton>
          <Badge variant="dot" color="secondary">
            <NotificationsOutlinedIcon 
               sx={{
                variant:"outlined",
                color:'black',
                
              }} />
          </Badge>
        </IconButton> */}
        {/* <IconButton>
          <PersonOutlinedIcon
          sx={{
            variant:"outlined",
            color:'black',
            
          }} />
        </IconButton> */}
      </Box>
    </Box>
  );
};

export default Topbar;
