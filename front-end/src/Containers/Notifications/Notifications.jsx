import React from 'react';
import { userReservedDummy as userReserved } from "../../Helpers/UserReservedDummy";
import { NotificationCard } from '../../Components/NotificationCard';

const Notifications = () => {
  
  return (
    <div data-aos='fade-up'>
    
      <div style={{ justifyContent:'center', display:'flex', flexDirection:'column', alignItems:'center'}}>
          {userReserved.map((book) => (
            <NotificationCard key ={book.id} title = {book.title} book_id={2}/>
          ))}
        </div>
    </div>
  );
};

export default Notifications;
