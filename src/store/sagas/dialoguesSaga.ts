import { takeLatest, put, call } from 'redux-saga/effects';

import { IDialoguesActionTypes } from '../types/dialogues';
import { setDialogues, setIsLoadingDialogues } from '../actions/dialoguesAction';
import dialoguesApi from '../../utils/api/dialoguesApi';

function* getAllDialogues() {
  try {
    yield put(setIsLoadingDialogues(true));
    const { data } = yield call(dialoguesApi.getAll);
    yield put(setDialogues(data));
  } catch (error: any) {
    console.log('error', error.message);
  } finally {
    yield put(setIsLoadingDialogues(false));
  }
}

export default function* dialoguesSagaWatcher() {
  yield takeLatest(IDialoguesActionTypes.DIALOGUES_REQUEST, getAllDialogues);
}
