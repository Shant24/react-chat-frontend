import { IMessage } from '../../types/message';

export interface IMessagesState {
  messages: IMessage[];
}

export enum IMessagesActionTypes {
  MESSAGES_REQUEST = 'MESSAGES_REQUEST',
  MESSAGES_REQUEST_ERROR = 'MESSAGES_REQUEST_ERROR',
  SET_MESSAGES = 'SET_MESSAGES',
}

export interface IGetMessagesAction {
  type: IMessagesActionTypes.MESSAGES_REQUEST;
  payload: string;
}

export interface ISetDialoguesAction {
  type: IMessagesActionTypes.SET_MESSAGES;
  payload: IMessage[];
}

export type IMessagesActions = IGetMessagesAction | ISetDialoguesAction;
