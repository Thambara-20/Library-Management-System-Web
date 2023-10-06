import axios from "axios"; // You need to import axios for making HTTP requests.
import jwtDecode from "jwt-decode";
import {Config} from "../services/config.js";
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

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
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

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt
};
