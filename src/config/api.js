import axios from "axios";

const API = axios.create({
  baseURL: 'https://api.quran.gading.dev'
});

export default API;