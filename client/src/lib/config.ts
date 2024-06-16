import axios from "axios";

const API_KEY = process.env.STRAPI_TOKEN;
console.log(API_KEY);

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: { Authorization: `Bearer${API_KEY}` },
});

export default axiosClient;
