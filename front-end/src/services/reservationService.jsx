import axios from 'axios';
import notification from './notificationService'
import { Config } from './config.js';
import authService from './authService';
const apiUrl = Config.Url; 

export default async function reserve(bookId) {
    try {
      const data = {
        bookid: bookId
      };
      await axios.post(`${apiUrl}/api/reservations`, data, {
        headers: {
          'x-auth-token': authService.getJwt(), 
        },
      });
      notification.showSuccess('Reservation successful');
    } catch (error) {
        console.log(error)
      if (error.response.status!==401){
      notification.showError("Reservation Unseccessful");}
      throw error;
    }
  }

  export  async function reservedlist() {
    try {
      const response = await axios.get(`${apiUrl}/api/reservations/find`,  {
        headers: {
          'x-auth-token': authService.getJwt(), 
        },
      });
    
      return response.data;
      
    } catch (error) {
        console.log(error)
    
    }
  }
  export async function cancelReservation(reservationId) {
    try {
        await axios.delete(`${apiUrl}/api/reservations/delete/${reservationId}`, {
          headers: {
            'x-auth-token': authService.getJwt(), // Include the entire header value as a string
          },
        });
        notification.showSuccess('Reservation cancelled successfully');
    }catch (error) {
      console.log(error)
      notification.showError('Error deleting reservation');
      throw error;
    }
}