import React, { useEffect, useState } from 'react';
import "./UserUpdatePage.css"
import { Button } from '@mui/material';
import { getBorrowingHistory } from '../../../services/barrowingService';
import { userReservationHistory } from '../../../services/reservationService';

const UserUpdate = ({ user, setupdateUser }) => {

    const [returnedCount, setReturnedCount] = useState([]);
    const [notReturnedCount, setNotReturnedCount] = useState([]);
    const [reservedCount, setReservedCount] = useState([]);

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
                                <h3>History</h3>
                                <h5>Books Borrowed {returnedCount}</h5>
                                <h5>Books Not Returned {notReturnedCount}</h5>
                                <h5>Books Reserved {reservedCount}</h5>
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
