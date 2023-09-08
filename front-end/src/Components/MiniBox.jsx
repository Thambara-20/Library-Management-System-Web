import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CountUp from 'react-countup';

// Define custom dark theme colors
const darkThemeColors = {
  background: '#222222', // Darker gray background color
  text: '#CCCCCC', // Light gray text color
  icon: '#FFFA00', // Darker orange icon color
  accent: '#4CAF50', // Darker green accent color
};

const MiniBox = ({ title, icon: Icon = PersonOutlineOutlinedIcon, count, increase }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      gridColumn="span 3"
      backgroundColor={darkThemeColors.background}
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
      position="relative"
      sx={{
        boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.5)',
        backgroundColor: darkThemeColors.background,
        transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Scale up on hover
        transition: 'transform 0.2s ease-in-out', // Add a smooth transition effect
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Text on the top-right corner */}
      <Typography
        variant="body1"
        sx={{
          fontSize: 30,
          position: 'absolute',
          top: '10px',
          left: '10px',
          color: darkThemeColors.text,
        }}
      >
        {<CountUp start={0} end={count} duration={4} />}
      </Typography>
      <Icon
        sx={{
          fontSize: 30,
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          color: darkThemeColors.icon,
        }}
      />
      <Typography
        variant="body2"
        sx={{
          fontSize: 15,
          position: 'absolute',
          top: '10px',
          right: '10px',
          color: darkThemeColors.accent,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default MiniBox;
