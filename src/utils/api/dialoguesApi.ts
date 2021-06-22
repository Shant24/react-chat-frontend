import axios from '../../axios';

const getAll = () => axios.get('/dialogues');

const dialoguesApi = { getAll };

export default dialoguesApi;
