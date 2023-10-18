import React, { useState } from 'react';
import WarningIcon from '@mui/icons-material/Warning';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const NotificationCard = ({ title, book_id, return_date, is_returned, email, is_read }) => {
    const [read, setRead] = useState(false);

    const markAsRead = () => {
        // You can implement the logic for marking the notification as read here
        setRead(true);
    };

    if (read) {
        return null;
    }
    return (

        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '2px', marginTop: '2px', width: '100%', backgroundColor: 'grey', padding: '10px 10px 10px 10px', borderRadius: '5px' }}>
            <div className='main-notification'style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' ,transition: 'transform 0.2s'}}>
             <style>
                {`
                   main-notification :hover {
                    transform: scale(1.1); 
                    }
                `}
            </style>
                <div style={{ display: 'flex', flex: 0.5 }}>
                    <WarningIcon style={{ color: 'rgb(181, 0, 0)', fontSize: 120 ,  boxShadow: '0 10px 10px rgba(0, 0, 0, 0.5)',borderRadius:'50%', padding:'10px 10px 10px 10px', }} />
                </div>
                <div style={{ display: 'flex', flex: 4, width: '100%', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '5px 5px 5px 5px' }}>

                        <p style={{ fontSize: 18 ,fontWeight:500 }}> You have not returned the book <strong>{title}</strong> id-{book_id} </p>
                        <p style={{ fontSize: 16, fontWeight:500 }}> Return date <strong>{return_date}</strong> expired. Please return the book as soon as possible </p>
                        <p style={{ fontSize: 16 ,fontWeight:500 }}> See your email {email} for more information, you will be charged per day</p>


                    </div>
                    {!read && (
                        <button onClick={markAsRead} style={{ fontSize: 16, background: 'transparent', padding: '5px', border: 'none', cursor: 'pointer', borderRadius: '5px', minWidth: '100px', transition: 'transform 0.2s, color 0.2s' }}>
                            <DeleteForeverIcon style={{ fontSize: 55 }} />
                            <style>
                                {`
                                    button:hover {
                                    transform: scale(1.1); 
                                    background-color: green;
                                    }
                                `}
                            </style>
                        </button>
                    )}

                </div>
            </div>
        </div>
    );
}


function FineCard({ charge, bookid, title }) {
    return (

        <div style={{ display: 'flex', flexDirection: 'row', height: '10vh' }}>
            <div style={{ display: 'flex', flex: 4 }}>
                <WarningIcon style={{ color: 'darkred', height: '7vh' }} />
            </div>
            <div style={{ display: 'flex', flex: 1 }}>
                <p> You have been charged {charge} for book {bookid} {title} daily</p>
                <p> Please pay the fine as soon as possible. contact now </p>
                <p> You will not be able to borrow books until you pay the fine </p>
            </div>
        </div>
    )

}

export { NotificationCard, FineCard }