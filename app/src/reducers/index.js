import { combineReducers } from 'redux'; //multiple reducers
import listsReducer from './listsReducer';
export default combineReducers({
  lists: listsReducer,
});
