import React from 'react';
import { Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { Event, Business, Person } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const CustomHeader = ({ headerText, iconType, to }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    let icon;
    switch (iconType) {
        case 'event':
            icon = <Event />;
            break;
        case 'business':
            icon = <Business />;
            break;
        case 'person':
            icon = <Person />;
            break;
        default:
            icon = null;
    }

    return (
        <Link to={'/admin/bookManagement'} style={{textDecoration:'none'}}> {/* Wrap the component with Link and provide the 'to' prop */}
            <Grid
                item
                container
                alignItems="center"
                data-aos="fade-up"
                spacing={isSmallScreen ? 1 : 2}
                sx={{
                    padding: "5px 0px 15px 15px",
                    margin: "1px",
                    borderRadius: '8px',
                    background: 'linear-gradient(45deg, black 40%, grey 90%)',
                    animation: 'roll-horizontal 4s infinite linear',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)'
                }}
            >
                <Grid item>
                    {icon && (
                        <div
                            style={{
                                fontSize: isSmallScreen ? 20 : 30,
                                verticalAlign: 'middle',
                                marginRight: isSmallScreen ? '4px' : '8px',
                                color: 'white',
                            }}
                        >
                            {icon}
                        </div>
                    )}
                </Grid>
                <Grid item>
                    <Typography
                        variant="h4"
                        style={{
                            color: grey[300],
                            fontSize: isSmallScreen ? '24px' : '40px',
                        }}
                    >
                        {headerText}
                    </Typography>
                </Grid>
            </Grid>
        </Link>
    );
};

export default CustomHeader;


