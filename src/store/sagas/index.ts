import { all } from 'redux-saga/effects';
import { dialoguesSagaWatcher } from './dialoguesSaga';
import { messagesSagaWatcher } from './messagesSaga';

export default function* rootSagas() {
  yield all([dialoguesSagaWatcher(), messagesSagaWatcher()]);
}
