import { IMessage } from '../../types/message';
import { IMessagesActionTypes } from '../types/messages';

export const setIsLoadingMessages = (isLoading: boolean) => ({
  type: IMessagesActionTypes.MESSAGES_SET_IS_LOADING,
  payload: isLoading,
});

export const fetchMessages = (dialoguesId: string) => ({
  type: IMessagesActionTypes.MESSAGES_REQUEST,
  payload: dialoguesId,
});

export const setMessages = (messages: IMessage[]) => ({
  type: IMessagesActionTypes.SET_MESSAGES,
  payload: messages,
});

export const removeMessages = () => ({
  type: IMessagesActionTypes.REMOVE_MESSAGES,
});
