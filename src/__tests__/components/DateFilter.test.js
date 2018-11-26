import React from 'react';
import { render } from 'react-testing-library';
import DateFilter from 'components/DateFilter';
import { DATE_FILTER } from 'utilities/constants/index';

const dateFrom = '2017-10-10';
const dateTo = '2018-10-10';
const onChange = () => {};

const label = 'Filtar por fechas';
describe('DateFilter component', () => {
  test('receives label props and renders text', () => {
    const { getByTestId } = render(<DateFilter
      handleChangeDateTo={onChange}
      handleChangeDateFrom={onChange}
      label={label}
      dateFrom={dateFrom}
      dateTo={dateTo}
      />);
    const node = getByTestId(DATE_FILTER);
    expect(node).toHaveTextContent(label);
  });
})
