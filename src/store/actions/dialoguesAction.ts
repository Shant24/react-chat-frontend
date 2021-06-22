import { IDialog } from '../../types/dialog';
import { IDialoguesActionTypes } from '../types/dialogues';

export const setIsLoadingDialogues = (isLoading: Required<boolean>) => ({
  type: IDialoguesActionTypes.DIALOGUES_SET_IS_LOADING,
  payload: isLoading,
});

export const fetchDialogues = () => ({
  type: IDialoguesActionTypes.DIALOGUES_REQUEST,
});

export const setDialogues = (dialogues: Required<IDialog[]>) => ({
  type: IDialoguesActionTypes.SET_DIALOGUES,
  payload: dialogues,
});
