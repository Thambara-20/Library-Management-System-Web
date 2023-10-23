import axios from 'axios';
import notification from './notificationService'
import { Config } from './config.js';
import authService from './authService';
const apiUrl = Config.Url; 

export async function fetchForumData(title) {
    console.log(title);
    try {
        const response = await axios.get(`${apiUrl}/api/comments/find?title=${title}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching forum data:", error);
        throw error;
    }
}


export async function AddComment(comment) {
    try {
        console.log(comment);
        await axios.post(`${apiUrl}/api/comments/addComment`, comment ,{
            headers: {
                'x-auth-token': authService.getJwt(), 
            },
        });
    } catch (error) {
        notification.showError('Error adding comment');
        throw error;
    }
}

export async function deleteComment(id) {
    try {
        await axios.delete(`${apiUrl}/api/comments/delete/${id}`, {
            headers: {
                'x-auth-token': authService.getJwt(),
            },
        });
    } catch (error) {
        notification.showError('Error deleting comment');
        throw error;
    }
}