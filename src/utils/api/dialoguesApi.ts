import axios from '../../axios';

const getAll = (userId: string) => axios.get('/dialogues');

const dialoguesApi = { getAll };

export default dialoguesApi;
