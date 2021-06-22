import axios from '../../axios';

const getAllByDialogueId = (dialogueId: string) => axios.get(`/messages?roomId=${dialogueId}`);

const messagesApi = { getAllByDialogueId };

export default messagesApi;
