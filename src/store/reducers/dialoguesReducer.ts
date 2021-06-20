import { IDialoguesState, IDialoguesActions, IDialoguesActionTypes } from '../types/dialogues';

const initialState: IDialoguesState = {
  dialogues: [],
};

const dialoguesReducer = (state: IDialoguesState = initialState, { type, payload }: IDialoguesActions) => {
  switch (type) {
    case IDialoguesActionTypes.SET_DIALOGUES:
      return { ...state, dialogues: payload };

    default:
      return state;
  }
};

export default dialoguesReducer;
