import React, { useEffect, useState } from 'react';
import "./UserUpdatePage.css"
import { Button } from '@mui/material';
import { getBorrowingHistory } from '../../../services/barrowingService';
import { userReservationHistory } from '../../../services/reservationService';
import BlacklistDialog from '../Blacklist/BlacklistPage'; // Import the BlacklistDialog component
import { addToBlacklist } from '../../../services/BlacklistService';

const UserUpdate = ({ user, setupdateUser }) => {

    const [returnedCount, setReturnedCount] = useState([]);
    const [notReturnedCount, setNotReturnedCount] = useState([]);
    const [reservedCount, setReservedCount] = useState([]);
    const [isBlacklistDialogOpen, setIsBlacklistDialogOpen] = useState(false); 

    const handleAddToBlacklist = async(reason) => {
        try{
        await addToBlacklist(reason, user);}
        catch (error) {
            console.error('Error adding to blacklist:', error);
        }
      };
    useEffect(() => {
        const getData = async () => {
            try {
                const data1 = await getBorrowingHistory(user.name);
                console.log(data1);
                setReturnedCount(data1.returned);
                setNotReturnedCount(data1.notReturned);

                const data2 = await userReservationHistory(user.name);
                setReservedCount(data2.reservationsCount);
                console.log(data2);
            } catch (error) {
                console.error(error);
            }
        };

        getData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

        } catch (error) {
            console.error('Error updating profile:', error);
            alert('An error occurred while updating the profile');
        }
    };

    return (

        <div style={{
            width: '100%', justifyContent: 'center', height: '100%', alignItems: 'center', background: 'linear-gradient(to right, #000, #999)',
        }}>
            <Button onClick={() => setupdateUser(false)} className='button-admin-user-update' variant="contained" color="primary" style={{ top: '10px', left: '10px', backgroundColor: 'white', color: 'black' }}>Back</Button>
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
                                <div>
                                    <h3 style={{ color: 'blue' }}>History</h3>
                                    <h5>Books Borrowed - <strong>{returnedCount}</strong></h5>
                                    <h5>Current Lendings - <strong>{notReturnedCount}</strong></h5>
                                    <h5>Books Reserved - <strong>{reservedCount}</strong></h5>
                                    <button className="Button-root-admin" type="button" onClick={() => setIsBlacklistDialogOpen(true)}>
                                        Add to Blacklist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            {/* Render the BlacklistDialog component */}
            <BlacklistDialog open={isBlacklistDialogOpen} onClose={() => setIsBlacklistDialogOpen(false)} onAddToBlacklist={handleAddToBlacklist} />
        </div>
    );
};

export default UserUpdate;
