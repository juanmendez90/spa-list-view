import React from 'react';
import Proptypes from 'prop-types';
import { Form } from 'reactstrap';

import { DATE_FILTER, DATE_TO, DATE_FROM } from 'utilities/constants/index';
import InputDate from 'components/InputDate';

class DateFilter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { label, dateFrom, dateTo, handleChangeDateTo, handleChangeDateFrom } = this.props;
    return (
      <div data-testid={DATE_FILTER}>
        <Form inline>
          <h6 className="mb-0">{label}</h6>
          <InputDate value={dateFrom} max={dateTo} onChange={handleChangeDateFrom} placeholder={DATE_FROM} />
          <InputDate value={dateTo} min={dateFrom} onChange={handleChangeDateTo} placeholder={DATE_TO} />
        </Form>
      </div>
    );
  }
}

DateFilter.propTypes = {
  label: Proptypes.string,
  dateFrom: Proptypes.string.isRequired,
  dateTo: Proptypes.string.isRequired,
  handleChangeDateTo: Proptypes.func.isRequired,
  handleChangeDateFrom: Proptypes.func.isRequired,
};

DateFilter.defaultProps = {
  label: '',
};

export default DateFilter;
