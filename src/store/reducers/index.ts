import { combineReducers } from 'redux';

import dialoguesData from './dialoguesReducer';
import messagesData from './messagesReducer';

const rootReducers = combineReducers({
  dialoguesData,
  messagesData,
});

export default rootReducers;
