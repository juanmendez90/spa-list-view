import React from 'react';
import { render } from 'react-testing-library';
import Header from 'components/Header';
import { MAIN_HEADER } from 'utilities/constants/index';

const title = 'Woffu';
const subtitle = 'HR suite';

describe('Header component', () => {
  test('Header component receives title and subtitle props and renders text', () => {
    const { getByTestId } = render(<Header title={title} subtitle={subtitle}/>);
    const node = getByTestId(MAIN_HEADER);
    expect(node).toHaveTextContent(title);
    expect(node).toHaveTextContent(subtitle);
  });
});
