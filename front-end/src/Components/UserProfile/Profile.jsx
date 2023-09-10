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


const Profile = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

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
                        <ListItem button className='custom-icon-list-item'>
                            <AccountCircleIcon />
                            <div className={`menu-text ${isSidebarOpen ? '' : 'collapsed'}`}>My Info
                            </div>
                        </ListItem>
                        <Divider />
                        <ListItem button className='custom-icon-list-item'>
                            <AssignmentIcon />
                            <div className={`menu-text ${isSidebarOpen ? '' : 'collapsed'}`}>

                                My Reservations
                            </div>
                        </ListItem>
                        <Divider />
                        <ListItem button className='custom-icon-list-item'>
                            <ShoppingBasketIcon />
                            <div className={`menu-text ${isSidebarOpen ? '' : 'collapsed'}`}>
                                My Borrowings

                            </div>
                        </ListItem>
                        <Divider />
                        <ListItem button className='custom-icon-list-item'>
                            <FavoriteIcon />
                            <div className={`menu-text ${isSidebarOpen ? '' : 'collapsed'}`}>

                                My Wishlist
                            </div>
                        </ListItem>
                        <Divider />
                        <ListItem button className='custom-icon-list-item'>
                            <RateReviewIcon />
                            <div className={`menu-text ${isSidebarOpen ? '' : 'collapsed'}`}>

                                My Reviews
                            </div>
                        </ListItem>
                        <Divider />
                        <ListItem button className='custom-icon-list-item'>
                            <ExitToAppIcon />
                            <div className={`menu-text ${isSidebarOpen ? '' : 'collapsed'}`}>

                                Log Out
                            </div>
                        </ListItem>
                    </List>
                </div>
                <div className={`Profile-info ${isSidebarOpen ? '' : 'collapsed'}`}>
                    <ProfileInfo />
                </div>
            </div>
        </div>
    );
};

export default Profile;

