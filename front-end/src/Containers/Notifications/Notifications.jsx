import {React,useEffect,useState} from 'react';
import { userReservedDummy as userReserved } from "../../Helpers/UserReservedDummy";
import { NotificationCard } from '../../Components/NotificationCard';
import { notificationService } from '../../services/reservationService';
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
    <div data-aos='fade-up'>
    
      <div style={{ justifyContent:'center', display:'flex', flexDirection:'column', alignItems:'center'}}>
          {notifications.map((book) => (
            <NotificationCard key ={book.id} title = {book.title} book_id={2}/>
          ))}
        </div>
    </div>
  );
};

export default Notifications;
