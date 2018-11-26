import React from 'react';
import { render } from 'react-testing-library';
import ListHeader from 'components/ListHeader';
import { LIST_HEADER } from 'utilities/constants/index';

const title = 'EQUIPO';

describe('ListHeader component', () => {
  test('ListHeader component receives title props and renders text', () => {
    const { getByTestId } = render(<ListHeader title={title}/>);
    const node = getByTestId(LIST_HEADER);
    expect(node).toHaveTextContent(title);
  });
});
