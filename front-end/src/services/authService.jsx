import axios from "axios"; // You need to import axios for making HTTP requests.
import jwtDecode from "jwt-decode";
import {Config} from "../services/config.js";
import  notification  from "./notificationService";
import { useNavigate } from 'react-router-dom';
const _ = require("lodash");
const tokenKey = "auth-x-token";


export async function login(formData) {
  try {
    const response = await axios.post(`${Config.Url}/api/users/login`, formData);
    const jwt = response.data;
    localStorage.setItem(tokenKey, jwt);
    return jwt
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}

export async function getUser() {
  try {
    const response = await axios.get(`${Config.Url}/api/users/me`, {
      headers: {
        "x-auth-token": getJwt(),
      },
    });
    return response.data;
  } catch (error) {
    console.error("Get user failed:", error);
    throw error;
  }
}

export async function updateUser(formData) {
  try{
    const response = await axios.put(`${Config.Url}/api/users/update`, formData,
    {
      headers: {
        "x-auth-token": getJwt(),
      },
    });
  notification.showSuccess("Update successful");
  }
  catch(error){
    console.error("Update failed:", error);
    throw error;
  }
  
}


export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {

  localStorage.removeItem(tokenKey);
  localStorage.removeItem('x-auth-alpha-wishlist');
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    if (jwt) {
      const a =(jwtDecode(jwt));
      const user = _.pick(a, ["name", "isAdmin"]);
      return user
    }
    return null;
  } catch (ex) {
    console.error("Error decoding JWT:", ex);
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}


export async function getUsersCount(){
  try{
    const response = await axios.get(`${Config.Url}/api/users/count`, {
    });
    return response.data;
  }
  catch(error){
    console.error("Get user failed:", error);
    throw error;
  }
}

export async function getUsersData(){
  try{
    const response = await axios.get(`${Config.Url}/api/users/find`, {
      headers: {
        "x-auth-token": getJwt(),
      },
    });
    return response.data;
  }
  catch(error){
    console.error("Get users failed:", error);
    throw error;
  }
}


export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
  getUser,
  updateUser,
  getUsersCount
};
