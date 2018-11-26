import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import Proptypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { INPUT_DATE } from 'constants/index';

const InputDate = ({ placeholder }) => (
  <InputGroup className="px-1" data-testid={INPUT_DATE}>
    <Input className="pr-2 pr-5" type="text" placeholder={placeholder}  />
    <div className="position-absolute right-3 mt-2">
        <FontAwesomeIcon icon={["far", "calendar"]}/>
    </div>
  </InputGroup>
);

InputDate.propTypes = {
  placeholder: Proptypes.string,
};

InputDate.defaultProps = {
  placeholder: '',
};

export default InputDate;
