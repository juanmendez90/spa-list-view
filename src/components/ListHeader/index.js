import React from 'react';
import Proptypes from 'prop-types';
import { CardHeader } from 'reactstrap';
import { LIST_HEADER } from 'constants/index'

const ListHeader = ({ title }) => (
  <CardHeader className="bg-white font-weight-bold" data-testid={LIST_HEADER}>{title}</CardHeader>
);

export default ListHeader;
