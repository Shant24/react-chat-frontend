import axios from '../../axios';

const getAll = (userId: string) => axios.get('/messages');

const messagesApi = { getAll };

export default messagesApi;
