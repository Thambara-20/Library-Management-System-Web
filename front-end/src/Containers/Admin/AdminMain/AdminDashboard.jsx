import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import MiniBox from '../../../Components/MiniBox';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import Reservations from '../Reservations';
import HorizontalRule from '../../../Components/horizontalline/Horizontalline';
import { getBooksCount } from '../../../services/bookService';
import { getUsersCount } from '../../../services/authService';
import {countUnreadNotifications } from '../../../services/notificationService';
import { getReservationsCount } from '../../../services/reservationService';
import { borrowingCount } from '../../../services/barrowingService';

const Dashboard = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const [usersCount, setUsersCount] = useState(0);
    const [booksCount, setBooksCount] = useState(0);
    const [unreadEmailsCount, setUnreadEmailsCount] = useState(0);
    const [pendingReservationsCount, setPendingReservationsCount] = useState(0);
    const [borrowingsCount,setBarrowingsCount]= useState(0)

    useEffect(() => {
        async function fetchData() {
            try {
                const bc = await getBooksCount();
                setBooksCount(bc.count);
                const ec =await countUnreadNotifications();
                setUnreadEmailsCount(ec)
                const uc = await getUsersCount();
                setUsersCount(uc.count)
                const pc = await getReservationsCount()
                setPendingReservationsCount(pc);
                const brc = await borrowingCount();
                setBarrowingsCount(brc);
            } catch (e) {
                console.error('Error fetching book count:', e);
            }
        }

        fetchData(); // Call the async function here

    }, []);


    return (

        <Box display="flex">
          
            <Box m="20px" alignItems="center" width="100%" marginTop="10px"justifyContent="space-between" >

                <Box data-aos="fade-up" display="flex" justifyContent="space-between" alignItems="center" margin="5px 0 10px" >

                    <h1 style={{color:'white'}}>DASHBOARD</h1>
                    <Typography variant="subtitle1">
                        Welcome to your dashboard
                    </Typography>
                </Box>

                {/* Grid */}
                <Box data-aos="fade-up" display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="120px" gap="20px" marginBottom="40px">

                    <MiniBox title={"Unread Emails Count"} icon={EmailOutlinedIcon} count={unreadEmailsCount} />
                    <MiniBox title={"Users Count"} icon={PersonOutlineOutlinedIcon} count={usersCount} />
                    <MiniBox title={"Books"} icon={LibraryBooksIcon} count={booksCount} />
                    <MiniBox title={"Pending reservations"} icon={PendingActionsOutlinedIcon} count={pendingReservationsCount} />
                  
                </Box>

                {/* Row 2 */}
                <HorizontalRule/>
                
                 <Reservations data-aos="fade-up" prc={pendingReservationsCount} brc={borrowingsCount} abc={booksCount-borrowingsCount-pendingReservationsCount}/>


            </Box >
        </Box>

    );
};

export default Dashboard;



