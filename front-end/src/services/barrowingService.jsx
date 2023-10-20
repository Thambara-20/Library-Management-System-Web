import axios from 'axios';
import notification from './notificationService'
import { Config } from './config.js';
import authService from './authService';
const apiUrl = Config.Url;

export async function getBarrows() {
  try {
    const res = await axios.get(`${apiUrl}/api/barrows/find`, {
      headers: {
        'x-auth-token': authService.getJwt(),
      },
    });
    return res.data;
  } catch (error) {
    console.log(error)
    if (error.response.status !== 401) {
      notification.showError("Getting barrows Unseccessful");
    }
    throw error;
  }
}

export async function getBarrowed() {
  try {
    const res = await axios.get(`${apiUrl}/api/barrows/findone`, {
      headers: {
        'x-auth-token': authService.getJwt(),
      },
    });
    return res.data;
  } catch (error) {
    console.log(error)
    if (error.response.status !== 401) {
      notification.showError("Getting barrow Unseccessful");
    }
    throw error;
  }
}

export async function returns(barrow_id) {
  try {
    console.log(barrow_id)
    const data = {
      barrow_id: barrow_id
    };
    await axios.put(`${apiUrl}/api/barrows/return`, data, {
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

export async function borrowingCount(){
  try {
    const response = await axios.get(`${apiUrl}/api/barrows/count`);
    return response.data.count;
  } catch (error) {
    throw error;
  }
}
