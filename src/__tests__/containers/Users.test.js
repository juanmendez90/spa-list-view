import React from 'react';
import { render } from 'react-testing-library';
import Users from 'containers/Users';
import { USERS_CONTAINER } from 'utilities/constants/index';

test('Users containers renders without crashing', () => {
  const { getByTestId } = render(<Users />);
  const node = getByTestId(USERS_CONTAINER);
  expect(node).toBeInTheDocument();
});
