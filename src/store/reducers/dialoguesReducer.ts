import { IDialoguesState, IDialoguesActions, IDialoguesActionTypes } from '../types/dialogues';

const initialState: IDialoguesState = {
  isLoading: false,
  dialogues: [],
};

const dialoguesReducer = (state: IDialoguesState = initialState, action: IDialoguesActions) => {
  switch (action.type) {
    case IDialoguesActionTypes.DIALOGUES_SET_IS_LOADING:
      return { ...state, isLoading: action.payload };

    case IDialoguesActionTypes.SET_DIALOGUES:
      return { ...state, dialogues: action.payload };

    default:
      return state;
  }
};

export default dialoguesReducer;
