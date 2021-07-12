import {
  LIST_BY_BOARD_LOAD,
  LIST_ADD_FAIL,
  LIST_ADD_SUCCESS,
} from '../actions/types';
const initialState = [];
const listsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_BY_BOARD_LOAD:
      return {
        ...state,
        ...payload,
      };
    case LIST_ADD_SUCCESS:
      return {
        ...state,
      };
    case LIST_ADD_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default listsReducer;
