import axios from 'axios';

const api = axios.create({ baseURL: 'https://engaged-api.herokuapp.com/auth/' });

export default api;