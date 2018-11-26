import React from 'react';
import { InputGroup, Input } from 'reactstrap';
import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { INPUT_DATE } from 'utilities/constants/index';

const InputDate = ({ placeholder, min, max, onChange, value }) => (
  <InputGroup className="px-1" data-testid={INPUT_DATE}>
    <Input value={value}  onChange={onChange} className="pr-2 pr-5" type="date" placeholder={placeholder} min={min} max={max} />
    <div className="position-absolute right-3 mt-2">
        <FontAwesomeIcon icon={["far", "calendar"]}/>
    </div>
  </InputGroup>
);

InputDate.propTypes = {
  placeholder: Proptypes.string,
  min: Proptypes.string,
  max: Proptypes.string,
  onChange: Proptypes.func.isRequired,
  value: Proptypes.string.isRequired,
};

InputDate.defaultProps = {
  placeholder: '',
  min: '',
  max: '',
};

export default InputDate;
