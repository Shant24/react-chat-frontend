import axios from '../../axios';

const getAllByDialogueId = (dialogueId: string) => axios.get(`/messages/${dialogueId}`);

const messagesApi = { getAllByDialogueId };

export default messagesApi;
