import * as consts from 'redux/constants/users';

const initialState = {
  isLoading: false,
  users: [],
  error: '',
};

export default (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case consts.GET_USERS: {
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    }
    case consts.GET_USERS_RECEIVED: {
      return {
        ...state,
        isLoading: false,
        users: data,
      };
    }
    case consts.GET_USERS_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: data,
      };
    }
    default:
      return state;
  }
};
