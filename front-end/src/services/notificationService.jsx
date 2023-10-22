import { Config } from './config.js';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authService from './authService';
const apiUrl = Config.Url;

export function showSuccess(message) {
    toast.success(message, {
        position: toast.POSITION.TOP_LEFT,
        style: {
            backgroundColor: 'black', 
            color: 'white', 
        },
    });
}

export function showError(message) {
    toast.error(message, {
        position: toast.POSITION.TOP_LEFT,
        style: {
          backgroundColor: 'black', 
          color: 'white', 
      },
    });
}

export async function notificationService() {
  try {
    const response = await axios.get(`${apiUrl}/api/notification/notifications`, {
      headers: {
        'x-auth-token': authService.getJwt(),
      },
    });
    return response.data;
    
  } catch (error) {
    console.log(error)

  }
}

export async function countUnreadNotifications() {
  try {
    const response = await axios.get(`${apiUrl}/api/notification/count`, {
      headers: {
        'x-auth-token': authService.getJwt(),
      },
    });
    return response.data;
    
  } catch (error) {
    console.log(error)

  }}

export async function markAsRead(notificationId) {
  try {
    const data= {id: notificationId};
    await axios.put(`${apiUrl}/api/notification/markasread/`, data,{
      headers: {
        'x-auth-token': authService.getJwt(),
      },
    });
    
  } catch (error) {
    console.log(error)

  }}

 export default { showSuccess, showError, notificationService, countUnreadNotifications };