import axios from "../../redux/auth/Header";
const API_URL = "http://localhost:3000/";

export const getStaff = () => axios.get(API_URL + "account/staff/getData");
