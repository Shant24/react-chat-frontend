import { createSelector } from 'reselect';

import { RootState } from '..';
import { IMessagesState } from '../types/messages';

const messagesDataSelector = (key: string) => (state: RootState) => (state.messagesData as any)[key];
const messagesSelector = (state: RootState) => (state.messagesData as IMessagesState).messages;

export const getAllMessagesSelector = createSelector(messagesSelector, (messages) => messages);

export const isLoadingMessagesSelector = createSelector(
  messagesDataSelector('isLoading'),
  (isLoading): boolean => isLoading,
);

export default messagesDataSelector;
