import { takeLatest, put } from 'redux-saga/effects';

import { IMessagesActionTypes, IGetMessagesAction } from '../types/messages';
import { setIsLoadingMessages, setMessages } from '../actions/messagesAction';
import messagesApi from '../../utils/api/messagesApi';

function* getAllMessagesByDialogueId({ payload }: IGetMessagesAction) {
  try {
    yield put(setIsLoadingMessages(true));
    const { data } = yield messagesApi.getAllByDialogueId(payload);
    yield put(setMessages(data));
  } catch (error: any) {
    console.log('error', error.message);
  } finally {
    yield put(setIsLoadingMessages(false));
  }
}

export default function* messagesSagaWatcher() {
  yield takeLatest(IMessagesActionTypes.MESSAGES_REQUEST, getAllMessagesByDialogueId);
}
