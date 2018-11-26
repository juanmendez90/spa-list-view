import React from 'react';
import { render } from 'react-testing-library';
import DateFilter from 'components/DateFilter';
import { DATE_FILTER } from 'constants/index';

const label = 'Filtar por fechas';

test('DateFilter component receives label props and renders text', () => {
  const { getByTestId } = render(<DateFilter label={label} />);
  const node = getByTestId(DATE_FILTER);
  expect(node).toHaveTextContent(label);
});
