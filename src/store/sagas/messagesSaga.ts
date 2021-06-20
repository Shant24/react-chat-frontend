import { takeLatest, put } from 'redux-saga/effects';

import messagesApi from '../../utils/api/messagesApi';
import { setMessages } from '../actions/messagesAction';
import { IMessagesActionTypes, IGetMessagesAction } from '../types/messages';

function* getMessages({ payload }: IGetMessagesAction) {
  try {
    const { data } = yield messagesApi.getAll(payload);
    yield put(setMessages(data));
  } catch (error) {
    console.log('error', error);
  }
}

export function* messagesSagaWatcher() {
  yield takeLatest(IMessagesActionTypes.MESSAGES_REQUEST, getMessages);
}
