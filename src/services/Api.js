//token: b83fb15d6293e0ae6881b28a6d3daf0c80136488

//baseURL : https://api-ssl.bitly.com/v4
import axios from 'axios';
export const key = 'b83fb15d6293e0ae6881b28a6d3daf0c80136488';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization':`Bearer ${key}`,
        'Content-Type': 'application/json'
    }
});

export default api;