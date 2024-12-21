import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://localhost:5000/v1", // Replace with your backend domain
});

export default api;
