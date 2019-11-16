import axios from 'axios';

const api = axios.create({ baseURL: 'https://engaged-api.herokuapp.com' });

export default api;