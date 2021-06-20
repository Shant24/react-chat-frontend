import { createSelector } from 'reselect';

import { RootState } from '..';
import { IMessagesState } from '../types/messages';

const messagesDataSelector = (key: string) => (state: RootState) => (state.messagesData as any)[key];
const messagesSelector = (state: RootState) => (state.messagesData as IMessagesState).messages;

export const getMessagesSelector = createSelector(messagesSelector, (messages) => ({ messages }));

export default messagesDataSelector;
