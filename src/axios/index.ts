import axios from 'axios';

import { API_URL } from '../utils/constants';
import getAccessToken from '../utils/AccessToken';

const api = axios.create({
  baseURL: API_URL,
  // withCredentials: true,
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
  },
});

export default api;
