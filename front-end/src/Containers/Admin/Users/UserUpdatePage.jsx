import React, { useEffect, useState } from 'react';
import "./UserUpdatePage.css"
import { Button } from '@mui/material';

const UserUpdate = ({ user , setupdateUser}) => {



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

        } catch (error) {
            console.error('Error updating profile:', error);
            alert('An error occurred while updating the profile');
        }
    };

    return (

        <div style={{width:'100%', justifyContent:'center', height:'100%', alignItems:'center',  background: 'linear-gradient(to right, #000, #999)',
    }}>
            <Button className='button-admin-user-update' variant="contained" color="primary" style={{top:'10px', left:'10px', backgroundColor:'white', color:'black' }}>Back</Button>
            <div className="ProfileInfo-wrapper-admin" data-aos="fade-up">
                <form onSubmit={handleSubmit}>
                    <div className="ProfileInfo-content-admin">
                        <div className="ProfileInfo-left-admin">
                            <div className="Account-info-admin">
                                <h3>Account Info</h3>
                                <h5>Email</h5>
                                <input
                                    type="text"
                                    name="email"
                                    value={user.email}
                                    disabled
                                />
                                <h5>Address</h5>
                                <input
                                    type="text"
                                    name="address"
                                    value={user.address}
                                    disabled
                                />
                                 <h5>Phone Number</h5>
                                <input
                                    type="text"
                                    name="phone"
                                    value={user.phone_number}
                                    disabled
                                />
                            </div>
                        </div>

                        {/* Right side */}
                        <div className="ProfileInfo-right-admin">
                            <div className="User-Data-admin">
                                <h3>History</h3>
                                <h5>Books Borrowed</h5>
                                <h5>Books Returned</h5>
                                <h5>Books Reserved</h5>
                                <button className="Button-root-admin" type="submit">
                                   Add to Blacklist
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserUpdate;
