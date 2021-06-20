import axios from 'axios';

import { API_URL } from '../utils/constants';

axios.defaults.baseURL = API_URL;

export default axios;
