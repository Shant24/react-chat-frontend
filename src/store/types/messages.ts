/* eslint-disable no-unused-vars */
import { IMessage } from '../../types/message';

export interface IMessagesState {
  isLoading: boolean;
  messages: IMessage[];
}

export enum IMessagesActionTypes {
  MESSAGES_SET_IS_LOADING = 'MESSAGES_SET_IS_LOADING',
  MESSAGES_REQUEST = 'MESSAGES_REQUEST',
  MESSAGES_REQUEST_ERROR = 'MESSAGES_REQUEST_ERROR',
  SET_MESSAGES = 'SET_MESSAGES',
  REMOVE_MESSAGES = 'REMOVE_MESSAGES',
}

interface IMessagesSetIsLoadingAction {
  type: IMessagesActionTypes.MESSAGES_SET_IS_LOADING;
  payload: boolean;
}

export interface IGetMessagesAction {
  type: IMessagesActionTypes.MESSAGES_REQUEST;
  payload: string;
}

interface ISetDialoguesAction {
  type: IMessagesActionTypes.SET_MESSAGES;
  payload: IMessage[];
}

interface IRemoveDialoguesAction {
  type: IMessagesActionTypes.REMOVE_MESSAGES;
}

export type IMessagesActions =
  | IMessagesSetIsLoadingAction
  | IGetMessagesAction
  | ISetDialoguesAction
  | IRemoveDialoguesAction;
