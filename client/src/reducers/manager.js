import * as types from '../actions/types';

const initialState = {
  status:''
};

function managerReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case types.SET_STATUS:
      return {
        ...state,
        status: payload
      };
    default:
      return state;
  }
}

export default managerReducer;
