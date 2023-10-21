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
import profileImg from "../assets/profile-icons/images.jpg"
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
// Custom Item component for MenuItems
const Item = ({ title, to, icon, selected, setSelected, collapsed=false }) => {

    return (
        <MenuItem
            
            active={selected === title}
            style={{ color: blueGrey[40] ,margin: collapsed ? 2: 0 }}
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
                    backgroundColor: ' black!important',
                },

                '& .pro-inner-item': {
                    padding: '5px 25px 5px 25px !important',
                },
                '& .pro-inner-item:hover': {
                    color: 'grey !important',
                },
                '& .pro-menu-item.active': {
                    color: 'grey !important',
                },
                borderRight: '1px solid grey',

            }}
        >
            <ProSidebar collapsed={isCollapsed}  >
                <Menu iconShape="square" 
                >
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
                                > Hello Admin!
                                </Typography>
                                <Typography variant="h8" color={green}>
                                    Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* Menu Items */}
                    <Box paddingLeft={isCollapsed ? '3%' : '10%'}>
                        <Typography variant="h12" color={blue} sx={{ m: '25px 0 2px 1px' }} textAlign={'center'}>
                            MainPage
                        </Typography>

                        <Item title="Dashboard" to="/admin" icon={<HomeOutlinedIcon style={{marginLeft:6}} />} selected={selected} setSelected={setSelected}    
                        />
                        <Item title="UserManager" to="/admin/userManagement" icon={<PersonOutlineOutlinedIcon style={{marginLeft:6}} />} selected={selected} setSelected={setSelected}
                        />
                        <Item title="BookManager" to="/admin/bookManagement" icon={<LibraryBooksIcon style={{marginLeft:6}} />} selected={selected} setSelected={setSelected}
                        />

                        <Typography variant="h10" color={blue} sx={{ m: '25px 0 2px 2px' }}>
                            Requests
                        </Typography>

                        {/* <Item
                            title="Pending Approvals"
                            to="/admin/bookManagement/PendingApprovals"
                            icon={<ContactsOutlinedIcon style={{marginLeft:6}} />}
                            selected={selected}
                            setSelected={setSelected}
                        /> */}
                        <Item
                            title="Reservations"
                            to="/admin/bookManagement/Reservations"
                            icon={<CollectionsBookmarkIcon style={{marginLeft:6}} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Borrowings"
                            to="/admin/bookManagement/Barrowings"
                            icon={<BookmarkAddedIcon style={{marginLeft:6}}  />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                    </Box>
                    <Item
                        sx={{  marginTop:9 }}
                        color="white" title={!isCollapsed && ("Back to Library")}
                        to="/"
                        icon={<ArrowBackIcon style={{marginLeft:6}} />}
                        selected={selected}
                        collapsed={isCollapsed}
                        setSelected={setSelected}
                    />
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;
