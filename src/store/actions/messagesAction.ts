import { IMessage } from '../../types/message';
import { IMessagesActionTypes } from '../types/messages';

export const fetchMessages = (userId: Required<string>) => ({
  type: IMessagesActionTypes.MESSAGES_REQUEST,
  payload: userId,
});

export const setMessages = (dialogues: Required<IMessage[]>) => ({
  type: IMessagesActionTypes.SET_MESSAGES,
  payload: dialogues,
});
