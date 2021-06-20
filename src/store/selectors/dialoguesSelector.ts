import { createSelector } from 'reselect';

import { RootState } from '..';
import { IDialoguesState } from '../types/dialogues';

const dialoguesDataSelector = (key: string) => (state: RootState) => (state.dialoguesData as any)[key];
const dialoguesSelector = (state: RootState) => (state.dialoguesData as IDialoguesState).dialogues;

export const getDialoguesSelector = createSelector(dialoguesSelector, (dialogues) => ({ dialogues }));

export default dialoguesDataSelector;
