import * as consts from 'redux/constants/users';
import { getUsers } from 'api/index';

const fetchUsersSuccess = (data) => ({
  type: consts.GET_USERS_RECEIVED,
  data
});

const fetchUsersFailed = (error) => ({
  type: consts.GET_USERS_FAILED,
  data: error
});

export const fetchUsers = () => (dispatch, getState) => {
  dispatch({ type: consts.GET_USERS });
  return getUsers()
    .then((response) => dispatch(fetchUsersSuccess(response)))
    .catch((error) => dispatch(fetchUsersFailed(error)));
};

export default fetchUsers;
