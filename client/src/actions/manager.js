import {
  SET_STATUS
} from './types';

export const setStatus = (status) => dispatch => {
  dispatch({
    type: SET_STATUS,
    payload: status
  })
}