import React, { useState } from 'react';
import WarningIcon from '@mui/icons-material/Warning';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { markAsRead } from '../services/notificationService';

const NotificationCard = ({ title, book_id, return_date, is_returned, email, is_read ,id, }) => {
    const [read, setRead] = useState(false);
    

    const mark = async () => {
        try {
            await markAsRead(id);
            console.log(id);
            setRead(true);
        }
        catch (error) {}

       
    };

    if (read) {
        return null;
    }
    return (

        <div className="wrapper-main" style={{ display: 'flex', flexDirection: 'column', marginBottom: '2px', marginTop: '2px', width: '100%', padding: '10px 10px 10px 10px', borderRadius: '5px'
        ,color: 'darkred !important',  
         background: 'black !important', 
         boxShadow: '0 10px 10px rgba(0, 0, 0, 0.7)',
         transition: 'transform 0.2s, color 0.2s',

         color: 'darkred !important', }}>
            <div className='main-notification'style={{ 
                display: 'flex', flexDirection: 'row', 
                justifyContent: 'space-between', alignItems: 'center',
                 width: '100%' ,transition: 'transform 0.2s',
                 color: 'darkred !important',   backgroundColor: 'black !important',
                 }}>
                <div style={{ display: 'flex', flex: 0.5 }}>
                    <WarningIcon style={{ color: 'rgb(181, 0, 0)', fontSize: 120 ,  boxShadow: '0 10px 10px rgba(0, 0, 0, 0.5)',borderRadius:'50%', padding:'10px 10px 10px 10px', }} />
                </div>
                <div style={{ display: 'flex', flex: 4, width: '100%', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '5px 5px 5px 5px',
                     color: 'darkred !important',
 }}>
                        <p style={{ fontSize: 18 ,fontWeight:400,color: 'white', }}> You have not returned the book <strong>{title}</strong> id-{book_id} </p>
                        <p style={{ fontSize: 16, fontWeight:400 ,color: 'white',}}> Return date <strong>{return_date}</strong> expired. Please return the book as soon as possible </p>
                        <p style={{ fontSize: 16 ,fontWeight:400,color: 'white', }}> See your email {email} for more information, you will be charged</p>


                    </div>
                    {!read && (
                        <button
                        onClick={mark}
                        style={{
                          fontSize: 16,
                          background: 'transparent',
                          padding: '5px',
                          border: 'none',
                          cursor: 'pointer',
                          borderRadius: '5px',
                          minWidth: '100px',
                          transition: 'transform 0.2s, color 0.2s',
                        }}
                      >
                        <DeleteForeverIcon className="icondelete" style={{ fontSize: 55, color: 'grey',borderRadius:'10px' }} />
                        <style>
                          {`
                            button:hover {
                              color: red !important;
                              transform: scale(1.1); 
                            }
                            .icondelete:hover {
                              color: darkred !important;
                              background-color: black !important;
                              box-shadow: 0 10px 10px rgba(0, 0, 0, 0.7);
                            }
                            .wrapper-main:hover {
                                scale: 1.1;
                                color: darkred !important;
                                background-color: black !important;
                                box-shadow: 0 10px 10px rgba(0, 0, 0, 0.7);
                              }
                            .p:hover{
                                color: darkred !important;
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