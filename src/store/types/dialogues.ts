import { IDialog } from '../../types/dialog';

export interface IDialoguesState {
  dialogues: IDialog[];
}

export enum IDialoguesActionTypes {
  DIALOGUES_REQUEST = 'DIALOGUES_REQUEST',
  DIALOGUES_REQUEST_ERROR = 'DIALOGUES_REQUEST_ERROR',
  SET_DIALOGUES = 'SET_DIALOGUES',
}

export interface IGetDialoguesAction {
  type: IDialoguesActionTypes.DIALOGUES_REQUEST;
  payload: string;
}

export interface ISetDialoguesAction {
  type: IDialoguesActionTypes.SET_DIALOGUES;
  payload: IDialog[];
}

export type IDialoguesActions = IGetDialoguesAction | ISetDialoguesAction;
