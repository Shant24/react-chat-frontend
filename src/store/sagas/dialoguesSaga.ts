import { takeLatest, put } from 'redux-saga/effects';

import dialoguesApi from '../../utils/api/dialoguesApi';
import { setDialogues } from '../actions/dialoguesAction';
import { IDialoguesActionTypes, IGetDialoguesAction } from '../types/dialogues';

function* getDialogues({ payload }: IGetDialoguesAction) {
  try {
    const { data } = yield dialoguesApi.getAll(payload);
    yield put(setDialogues(data));
  } catch (error) {
    console.log('error', error);
  }
}

export function* dialoguesSagaWatcher() {
  yield takeLatest(IDialoguesActionTypes.DIALOGUES_REQUEST, getDialogues);
}
