import React from 'react';
import { render } from 'react-testing-library';
import InputDate from 'components/InputDate';
import { INPUT_DATE } from 'constants/index';

const placeholder = "08/01/2019";

test('InputDate component receives placeholders props and renders text', () => {
  const { getByTestId } = render(<InputDate placeholder={placeholder} />);
  const node = getByTestId(INPUT_DATE);
  expect(node).toBeInTheDocument();
});
