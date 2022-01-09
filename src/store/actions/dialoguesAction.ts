import { IDialog } from '../../types/dialog';
import { IDialoguesActionTypes } from '../types/dialogues';

export const setIsLoadingDialogues = (isLoading: boolean) => ({
  type: IDialoguesActionTypes.DIALOGUES_SET_IS_LOADING,
  payload: isLoading,
});

export const fetchDialogues = () => ({
  type: IDialoguesActionTypes.DIALOGUES_REQUEST,
});

export const setDialogues = (dialogues: IDialog[]) => ({
  type: IDialoguesActionTypes.SET_DIALOGUES,
  payload: dialogues,
});
