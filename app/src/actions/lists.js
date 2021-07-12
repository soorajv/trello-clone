import axios from 'axios';
import { LIST_ADD_FAIL, LIST_ADD_SUCCESS, LIST_BY_BOARD_LOAD } from './types';

const listByBoardLoad = () => async (dispatch) => {
  const url = `${process.env.REACT_APP_GET_LIST_BY_BOARD_URL}?boardId=${process.env.REACT_APP_BOARD_ID}`;

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  let res = await axios.get(url, config);
  return dispatch({
    type: LIST_BY_BOARD_LOAD,
    payload: res.data,
  });
};

//listAdd
const listAdd = (body) => async (dispatch) => {
  try {
    const url = process.env.REACT_APP_GET_ADD_LIST_URL;
    console.log(url);
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    let res = await axios.post(url, body, config);

    return dispatch({
      type: LIST_ADD_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LIST_ADD_FAIL,
    });
  }
};
export default {
  listByBoardLoad,
  listAdd,
};
