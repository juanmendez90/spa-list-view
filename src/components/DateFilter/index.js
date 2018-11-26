import React from 'react';
import Proptypes from 'prop-types';
import { Form } from 'reactstrap';

import { DATE_FILTER, DATE_TO, DATE_FROM } from 'utilities/constants/index';
import InputDate from 'components/InputDate';

const DateFilter = ({ label }) => (
  <div data-testid={DATE_FILTER}>
    <Form inline>
      <h6 className="mb-0">{label}</h6>
      <InputDate placeholder={DATE_TO} />
      <InputDate placeholder={DATE_FROM} />
    </Form>
  </div>
);

DateFilter.propTypes = {
  label: Proptypes.string,
};

DateFilter.defaultProps = {
  label: '',
};

export default DateFilter;
