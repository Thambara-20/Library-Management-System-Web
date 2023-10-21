import axios from 'axios';
import notification from './notificationService'
import { Config } from './config.js';
import authService from './authService';
const apiUrl = Config.Url;

export async function addToBlacklist(message,user) {
    try {
        const data = {
            message: message,
            user: user
        };

        const res = await axios.post(`${apiUrl}/api/blacklist/create`,data, {
        headers: {
            'x-auth-token': authService.getJwt(),
        },
        });
        notification.showSuccess("Added to Blacklist Successful");
        return res.data;
    } catch (error) {
        console.log(error)
        if (error.response.status !== 401) {
        notification.showError("Added to Blacklist Unseccessful");
        }
        throw error;
    }
}

export async function isBlacklisted(name) {
    try {
        const res = await axios.get(`${apiUrl}/api/blacklist/isBlacklisted/${name}`, {
        headers: {
            'x-auth-token': authService.getJwt(),
        },
        });
        return res.data;
    } catch (error) {
        console.log(error)
        if (error.response.status !== 401) {
        notification.showError("Getting Blacklist Unseccessful");
        }
        throw error;
    }
}

export async function deleteBlacklistedUser(name){
    try {
        const res = await axios.delete(`${apiUrl}/api/blacklist/delete/${name}`, {
        headers: {
            'x-auth-token': authService.getJwt(),
        },
        });
        notification.showSuccess("Delete Blacklist Successful");
        return res.data;
    } catch (error) {
        console.log(error)
        if (error.response.status !== 401) {
        notification.showError("Delete Blacklist Unseccessful");
        }
        throw error;
    }
}

export async function getBlacklistedUsers() {
    try {
        const res = await axios.get(`${apiUrl}/api/blacklist/find`, {
        headers: {
            'x-auth-token': authService.getJwt(),
        },
        });
        return res.data;
    } catch (error) {
        console.log(error)
        if (error.response.status !== 401) {
        notification.showError("Getting Blacklist Unseccessful");
        }
        throw error;
    }
}