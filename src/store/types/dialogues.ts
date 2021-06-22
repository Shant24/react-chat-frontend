import { IDialog } from '../../types/dialog';

export interface IDialoguesState {
  isLoading: boolean;
  dialogues: IDialog[];
}

export enum IDialoguesActionTypes {
  DIALOGUES_SET_IS_LOADING = 'DIALOGUES_SET_IS_LOADING',
  DIALOGUES_REQUEST = 'DIALOGUES_REQUEST',
  DIALOGUES_REQUEST_ERROR = 'DIALOGUES_REQUEST_ERROR',
  SET_DIALOGUES = 'SET_DIALOGUES',
}

export interface IDialoguesSetIsLoadingAction {
  type: IDialoguesActionTypes.DIALOGUES_SET_IS_LOADING;
  payload: boolean;
}

export interface IGetAllDialoguesAction {
  type: IDialoguesActionTypes.DIALOGUES_REQUEST;
}

export interface ISetDialoguesAction {
  type: IDialoguesActionTypes.SET_DIALOGUES;
  payload: IDialog[];
}

export type IDialoguesActions = IDialoguesSetIsLoadingAction | IGetAllDialoguesAction | ISetDialoguesAction;
