import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import { Box, IconButton, Typography, } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { blueGrey, green, grey, cyan, blue } from '@mui/material/colors';
import profileImg from "../assets/profile-icons/images.jpeg"
// Custom Item component for MenuItems
const Item = ({ title, to, icon, selected, setSelected }) => {

    return (
        <MenuItem
            active={selected === title}
            style={{ color: blueGrey[40] }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const Sidebar = () => {

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState(`admin`);

    return (
        <Box
            sx={{
                '& .pro-sidebar-inner': {
                    backgroundColor: ' !important',
                },

                '& .pro-inner-item': {
                    padding: '5px 35px 5px 20px !important',
                },
                '& .pro-inner-item:hover': {
                    color: 'grey !important',
                },
                '& .pro-menu-item.active': {
                    color: 'grey !important',
                },

            }}
        >
            <ProSidebar collapsed={isCollapsed}  >
                <Menu iconShape="square" >
                    {/* Logo & Menu Icon */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: '0 0 15px 0',
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h7" color={cyan}>
                                    Admin Home
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon style={{ color: "grey" }} />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* User */}
                    {!isCollapsed && (
                        <Box mb="20px">
                            <Box display="flex" justifyContent="center" alignItems="center" >
                                <img alt='profile'
                                    src={profileImg}
                                    width="100px" height="100px"
                                    style={{ borderRadius: '50%', cursor: 'pointer', backgroundColor: "white" }}
                                />
                            </Box>

                            <Box textAlign="center">
                                <Typography variant="h5" color={grey} fontWeight="bold" sx={{ m: '10px 0 0 0' }}
                                > Mahinda Rajapaksha
                                </Typography>
                                <Typography variant="h8" color={green}>
                                    Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* Menu Items */}
                    <Box paddingLeft={isCollapsed ? '2%' : '10%'}>
                        <Typography variant="h10" color={blue} sx={{ m: '25px 0 2px 0' }} textAlign={'center'}>
                            MainPage
                        </Typography>

                        <Item title="Dashboard" to="/admin" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected}
                        />
                        <Item title="UserManager" to="/admin/userManagement" icon={<PersonOutlineOutlinedIcon />} selected={selected} setSelected={setSelected}
                        />
                        <Item title="BookManager" to="/admin/bookManagement" icon={<LibraryBooksIcon />} selected={selected} setSelected={setSelected}
                        />

                        <Typography variant="h10" color={blue} sx={{ m: '25px 0 2px 2px' }}>
                            Requests
                        </Typography>

                        <Item
                            title="Pending Approvals"
                            to="/admin"
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                    </Box>
                    <Item 
                            color="white" title={!isCollapsed &&("Back to Library")}
                            to="/"
                            icon={<ArrowBackIcon />}
                            selected={selected}
                            setSelected={setSelected}
                         />
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;
