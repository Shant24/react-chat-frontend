import { IMessagesState, IMessagesActions, IMessagesActionTypes } from '../types/messages';

const initialState: IMessagesState = {
  isLoading: false,
  messages: [],
};

const messagesReducer = (state: IMessagesState = initialState, action: IMessagesActions) => {
  switch (action.type) {
    case IMessagesActionTypes.MESSAGES_SET_IS_LOADING:
      return { ...state, isLoading: action.payload };

    case IMessagesActionTypes.SET_MESSAGES:
      return { ...state, messages: action.payload };

    case IMessagesActionTypes.REMOVE_MESSAGES:
      return { ...state, messages: [] };

    default:
      return state;
  }
};

export default messagesReducer;
