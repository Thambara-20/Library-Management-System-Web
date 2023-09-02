import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import MiniBox from '../../Components/MiniBox';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';

const Dashboard = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <Box m="20px" alignItems="center" width="98%" marginTop="10px">

            <Box data-aos="fade-up" display="flex" justifyContent="space-between" alignItems="center" margin="5px 0 10px" >
               
                <Typography variant="h3">DASHBOARD</Typography>
                <Typography variant="subtitle1">
                    Welcome to your dashboard
                </Typography>
            </Box>

            {/* Grid */}
            <Box data-aos="fade-up" display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="120px" gap="20px">

                <MiniBox title={"Emails Count"} icon={EmailOutlinedIcon} count = {100}/>
                <MiniBox title={"Users Count"} icon={PersonOutlineOutlinedIcon} count = {129}/>
                <MiniBox title={"Books"} icon={LibraryBooksIcon} count={6900001}/>
                <MiniBox title={"Pending reservations"} icon={PendingActionsOutlinedIcon} count = {120} />
                <MiniBox title={"Pending Approvals"} icon={GroupAddOutlinedIcon} count = {122}/>
             
                {/* Row 2 */}
                <Box
                    data-aos="fade-up" // Add AOS animation attribute
                    gridColumn="span 10"
                    gridRow="span 3"
                    backgroundColor={grey[500]}
                    borderRadius="10px"
                    alignItems="center"
                >
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;

