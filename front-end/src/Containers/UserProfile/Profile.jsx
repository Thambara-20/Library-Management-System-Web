import React, { useEffect, useState } from 'react';
import ProfileInfo from './ProfileInfo';
import { Button, ListItem, List, Divider, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import './Profile.css'; // Import the CSS file for styling
import MenuIcon from '@mui/icons-material/Menu';// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReservedBooks from '../Reserve/ReservedBooks';
import Aos from 'aos';
import BarrowedBooks from '../Barrow/Barrowed';
import WishList from '../Wishlist/Wishlist';
import Notifications from '../Notifications/Notifications';

const Profile = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const pages = [<ProfileInfo/>,<ReservedBooks/>,<BarrowedBooks/>,<WishList/>,<Notifications/>]
    const [currentPage, setCurrentPage] = useState(1);



    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setSidebarOpen(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        Aos.init({
          duration: 1000,
       });
    },[]);

    return (
        <div className={`Profile-container ${isSidebarOpen ? '' : 'collapsed'}`}>
            <div className='Profile-top'>
                <Avatar className='Profile-avatar'>
                    <PersonIcon fontSize='large' />
                </Avatar>
                <h2 className='Profile-heading'>Profile</h2>
            </div>
            <div className='Profile-content'>
                <div className={`Sidebar ${isSidebarOpen ? '' : 'collapsed'}`}>
                    <Button className='toggle-button' onClick={toggleSidebar}>
                        {<MenuIcon />}
                    </Button>

                    <List>
                        <ListItem button className='custom-icon-list-item'  onClick={() => setCurrentPage(0)}>
                            <AccountCircleIcon />
                            <div className={`menu-text ${isSidebarOpen ? '' : 'collapsed'}`}>My Info
                            </div>
                        </ListItem>
                        <Divider />
                        <ListItem button className='custom-icon-list-item'  onClick={() => setCurrentPage(1)}>
                            <AssignmentIcon />
                            <div className={`menu-text ${isSidebarOpen ? '' : 'collapsed'}`}>

                                My Reservations
                            </div>
                        </ListItem>
                        <Divider />
                        <ListItem button className='custom-icon-list-item'  onClick={() => setCurrentPage(2)}>
                            <ShoppingBasketIcon />
                            <div className={`menu-text ${isSidebarOpen ? '' : 'collapsed'}`}>
                                My Borrowings

                            </div>
                        </ListItem>
                        <Divider />
                        <ListItem button className='custom-icon-list-item'  onClick={() => setCurrentPage(3)}>
                            <FavoriteIcon />
                            <div className={`menu-text ${isSidebarOpen ? '' : 'collapsed'}`}>

                                My Wishlist
                            </div>
                        </ListItem>
                        <Divider />
                        <ListItem button className='custom-icon-list-item'  onClick={() => setCurrentPage(4)}>
                            <RateReviewIcon />
                            <div className={`menu-text ${isSidebarOpen ? '' : 'collapsed'}`}>

                                Notifications
                            </div>
                        </ListItem>
                        <Divider />
                        <ListItem button className='custom-icon-list-item' onClick={() => setCurrentPage(5)}>
                            <ExitToAppIcon />
                            <div className={`menu-text ${isSidebarOpen ? '' : 'collapsed'}`}>

                                Log Out
                            </div>
                        </ListItem>
                    </List>
                </div>
                <div className={`Profile-info ${isSidebarOpen ? '' : 'collapsed'}`}>
                    {pages[currentPage]}
                   
                </div>
            </div>
        </div>
    );
};

export default Profile;

