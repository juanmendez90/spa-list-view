import React from 'react';
import Proptypes from 'prop-types';
import { CardHeader } from 'reactstrap';
import { LIST_HEADER } from 'constants/index'

const ListHeader = ({ title }) => (
  <CardHeader data-testid={LIST_HEADER}>{title}</CardHeader>
);

export default ListHeader;
