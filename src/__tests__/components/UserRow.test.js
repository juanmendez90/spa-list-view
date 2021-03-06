import React from 'react';
import { render } from 'react-testing-library';
import UserRow from 'components/UserRow';
import users from 'utilities/mocks/users';
import { USER_ROW } from 'utilities/constants/index';

const user = users[0];

describe('TableRow component', () => {
  test('TableRow component receives user props and renders it', () => {
    const { getByTestId } = render(<table><tbody><UserRow user={user} /></tbody></table>);
    const node = getByTestId(USER_ROW);
    expect(node).toHaveTextContent(user.FirstName);
    expect(node).toHaveTextContent(user.LastName);
  });
});
