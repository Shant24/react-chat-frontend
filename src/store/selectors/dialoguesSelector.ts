import { createSelector } from 'reselect';

import { RootState } from '..';
import { IDialoguesState } from '../types/dialogues';

const dialoguesDataSelector = (key: string) => (state: RootState) => (state.dialoguesData as any)[key];
const dialoguesSelector = (state: RootState) => (state.dialoguesData as IDialoguesState).dialogues;

export const getDialoguesSelector = createSelector(dialoguesSelector, (dialogues) => dialogues);

export const getDialogueById = (roomId: string = '') =>
  createSelector(dialoguesSelector, (dialogues) => dialogues.find((dialog) => dialog._id === roomId) || null);

export const isLoadingDialoguesSelector = createSelector(
  dialoguesDataSelector('isLoading'),
  (isLoading): boolean => isLoading,
);

export default dialoguesDataSelector;
