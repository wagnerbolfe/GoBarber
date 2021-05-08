import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gobarber-backend.wag.dev.br',
});

export default api;
