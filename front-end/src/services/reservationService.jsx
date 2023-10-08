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
      if (error.response.status!=401){
      notification.showError("Reservation Unseccessful");}
      throw error;
    }
  }