import { IDialog } from '../../types/dialog';
import { IDialoguesActionTypes } from '../types/dialogues';

export const fetchDialogues = (userId: Required<string>) => ({
  type: IDialoguesActionTypes.DIALOGUES_REQUEST,
  payload: userId,
});

export const setDialogues = (dialogues: Required<IDialog[]>) => ({
  type: IDialoguesActionTypes.SET_DIALOGUES,
  payload: dialogues,
});
