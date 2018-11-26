import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from 'redux/actions/users';
import * as consts from 'redux/constants/users';
import users from 'utilities/mocks/users';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Users Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('Should create an action to get users data', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: users,
      });
    });
    const store = mockStore({
      usersReducer: {
        isLoading: false,
        users: [],
        error: '',
      },
    });
    const expectedActions = [
      { type: consts.GET_USERS },
      {
        type: consts.GET_USERS_RECEIVED,
        data: users,
      },
    ];

    return store.dispatch(actions.fetchUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
