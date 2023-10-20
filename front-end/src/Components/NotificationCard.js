import React, { useState } from 'react';
import WarningIcon from '@mui/icons-material/Warning';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { markAsRead } from '../services/notificationService';

const NotificationCard = ({ title, book_id, return_date, is_returned, email, is_read, id, }) => {
  const [read, setRead] = useState(false);


  const mark = async () => {
    try {
      await markAsRead(id);
      console.log(id);
      setRead(true);
    }
    catch (error) { }


  };

  if (read) {
    return null;
  }
  return (

    <div className="wrapper-main" sx={{
      borderRadius:'5px !important',
      display: 'flex', flexDirection: 'column', marginBottom: '2px', marginTop: '2px', width: '100%',
      boxShadow: '0 10px 10px rgba(0, 0, 0, 0.7)',
    }}>
      <div className='main-notification' style={{
        display: 'flex', flexDirection: 'row',
        padding: '20px 10px 20px 10px',
        justifyContent: 'space-between', alignItems: 'center',
        width: '100%',
       
      
      }}>
        <div style={{ display: 'flex', flex: 0.5 }}>
          <WarningIcon style={{ color: 'rgb(181, 0, 0)', fontSize: 120, boxShadow: '0 10px 10px rgba(0, 0, 0, 0.5)', borderRadius: '50%', padding: '10px 10px 10px 10px', }} />
        </div>

        <div style={{ display: 'flex', flex: 4, width: '100%', justifyContent: 'space-between' }}>
          <div className="paragraph" style={{ display: 'flex', flexDirection: 'column', padding: '5px 5px 5px 5px' }}>
            <p className="para" style={{ fontSize: 14, fontWeight: 300, color: 'white',transition:'color 0.2s ease-in-out' }}>
              You have not returned the book <strong>{title}</strong> id-{book_id}. <br />Return date
              <strong>{return_date}</strong> has expired.<br /> Please return the book as soon as possible.<br />
              See your email {email} for more information; you will be charged.
            </p>
            <style>
              {`
                            .para:hover{
                                transition: color 0.2s ease-in-out !important;
                                color: red !important;
                            }
                          `}
            </style>
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
                minWidth: '10px',
                transition: 'transform 0.2s, color 0.2s',
              }}
            >
              <DeleteForeverIcon className="icondel" style={{ fontSize: 55, color: 'grey', borderRadius: '10px' }} />
              <style>
                {`
                            button:hover {
                              color: red !important;
                              transform: scale(1.01); 
                            }
                            .icondel:hover {
                              color: darkred !important;
                            }
                          
                            .para:{
                                color: grey !important;
                            }
                         
                          `}
              </style>
            </button>
          )}

        </div>
      </div>
      <style>
        {`  

        .wrapper-main{
   
          border-radius: '5px';
          padding:'20px 10px 20px 10px';
          transition: transform 0.2s ease-in-out !important;
          border: 2px solid darkred;
          border-radius: 5px;
          
        }
      
        .wrapper-main:hover{
                    transform: scale(1.01)  !important;
                    transition: transform 0.2s ease-in-out !important;  
                    background-color: black !important;
                    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.7);
                    color: darkred !important;
                    background-color: black !important;
                } `}
      </style>

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