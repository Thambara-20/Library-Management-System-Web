import {React,useEffect,useState} from 'react';
import { userReservedDummy as userReserved } from "../../Helpers/UserReservedDummy";
import { NotificationCard } from '../../Components/NotificationCard';
import { notificationService } from '../../services/notificationService';
import LoadingIcon from '../../Components/LoadingIcon';


const Notifications = () => {
const [notifications, setNotifications]= useState();

useEffect(() => {
  async function fetchData() {
    try {
      const response = await notificationService();
      setNotifications(response);
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();
},
 []);

 if (notifications===undefined) {
   
   return <LoadingIcon/>}
  
  return (
    <div data-aos='fade-up' style={{borderRadius:'5px !important'}}>
    
      <div style={{ justifyContent:'flex-start', display:'flex', flexDirection:'column', alignItems:'center',borderRadius:'5px !important'}}>
          {notifications.map((book) => (
            <NotificationCard  key ={book.notification_id} id = {book.notification_id} title = {book.book} book_id={book.bookid} />
          ))}
        </div>
    </div>
  );
};

export default Notifications;
