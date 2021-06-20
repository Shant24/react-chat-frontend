import { IMessagesState, IMessagesActions, IMessagesActionTypes } from '../types/messages';

const initialState: IMessagesState = {
  messages: [],
};

const messagesReducer = (state: IMessagesState = initialState, { type, payload }: IMessagesActions) => {
  switch (type) {
    case IMessagesActionTypes.SET_MESSAGES:
      return { ...state, messages: payload };

    default:
      return state;
  }
};

export default messagesReducer;
