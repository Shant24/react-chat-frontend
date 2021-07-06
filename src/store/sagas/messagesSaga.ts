import { takeLatest, put } from 'redux-saga/effects';

import messagesApi from '../../utils/api/messagesApi';
import { setIsLoadingMessages, setMessages } from '../actions/messagesAction';
import { IMessagesActionTypes, IGetMessagesAction } from '../types/messages';

function* getAllMessagesByDialogueId({ payload }: IGetMessagesAction) {
  try {
    yield put(setIsLoadingMessages(true));
    const { data } = yield messagesApi.getAllByDialogueId(payload);
    yield put(setMessages(data));
    yield put(setIsLoadingMessages(false));
  } catch (error) {
    yield put(setIsLoadingMessages(false));
    // eslint-disable-next-line no-console
    console.log('error', error.message);
  }
}

export default function* messagesSagaWatcher() {
  yield takeLatest(IMessagesActionTypes.MESSAGES_REQUEST, getAllMessagesByDialogueId);
}
