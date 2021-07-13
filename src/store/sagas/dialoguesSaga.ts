import { takeLatest, put, call } from 'redux-saga/effects';

import dialoguesApi from '../../utils/api/dialoguesApi';
import { setDialogues, setIsLoadingDialogues } from '../actions/dialoguesAction';
import { IDialoguesActionTypes } from '../types/dialogues';

function* getAllDialogues() {
  try {
    yield put(setIsLoadingDialogues(true));
    const { data } = yield call(dialoguesApi.getAll);
    yield put(setDialogues(data));
    yield put(setIsLoadingDialogues(false));
  } catch (error) {
    yield put(setIsLoadingDialogues(false));
    console.log('error', error.message);
  }
}

export default function* dialoguesSagaWatcher() {
  yield takeLatest(IDialoguesActionTypes.DIALOGUES_REQUEST, getAllDialogues);
}
