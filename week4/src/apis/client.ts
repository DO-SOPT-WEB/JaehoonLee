import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_APP_IP}`;
console.log(BASE_URL);
export const client = axios.create({
  baseURL: BASE_URL,

  headers: {
    'Content-Type': 'application/json',
  },
});
