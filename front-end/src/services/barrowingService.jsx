import axios from 'axios';
import notification from './notificationService'
import { Config } from './config.js';
import authService from './authService';
const apiUrl = Config.Url;

export default async function return(reservation_id) {
  try {
    const data = {
      reservation_id: reservation_id
    };
    await axios.post(`${apiUrl}/api/barrows/return`, data, {
      headers: {
        'x-auth-token': authService.getJwt(),
      },
    });
    notification.showSuccess('Returning successful');
  } catch (error) {
    console.log(error)
    if (error.response.status !== 401) {
      notification.showError("Returning Unseccessful");
    }
    throw error;
  }
}