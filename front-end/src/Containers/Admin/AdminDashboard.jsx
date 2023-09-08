import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { grey, green } from '@mui/material/colors';
import MiniBox from '../../Components/MiniBox';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import PieChart from '../../Components/Chart/Chart';
import Reservations from './Reservations';
import HorizontalRule from '../../Components/horizontalline/Horizontalline';
import PieRechartComponent from '../../Components/Chart/Chart';

const Dashboard = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (

        <Box display="flex">
          
            <Box m="20px" alignItems="center" width="100%" marginTop="10px"justifyContent="space-between" >

                <Box data-aos="fade-up" display="flex" justifyContent="space-between" alignItems="center" margin="5px 0 10px" >

                    <Typography variant="h3">DASHBOARD</Typography>
                    <Typography variant="subtitle1">
                        Welcome to your dashboard
                    </Typography>
                </Box>

                {/* Grid */}
                <Box data-aos="fade-up" display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="120px" gap="20px" marginBottom="40px">

                    <MiniBox title={"Emails Count"} icon={EmailOutlinedIcon} count={100} />
                    <MiniBox title={"Users Count"} icon={PersonOutlineOutlinedIcon} count={129} />
                    <MiniBox title={"Books"} icon={LibraryBooksIcon} count={6900001} />
                    <MiniBox title={"Pending reservations"} icon={PendingActionsOutlinedIcon} count={120} />
                  
                </Box>

                {/* Row 2 */}
                <HorizontalRule/>
                
                 <Reservations/>
             
               
               
              
               

            </Box >
        </Box>

    );
};

export default Dashboard;



