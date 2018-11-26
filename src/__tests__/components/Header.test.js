import React from 'react';
import { render } from 'react-testing-library';
import Header from 'components/Header';
import { MAIN_HEADER } from 'constants/index';

const title = 'Woffu';
const subtitle = 'HR suite';

test('Header component receives title and subtitle props and renders text', () => {
  const { getByTestId } = render(<Header title={title} subtitle={subtitle}/>);
  const node = getByTestId(MAIN_HEADER);
  expect(node).toHaveTextContent(title);
  expect(node).toHaveTextContent(subtitle);
});
