import React from 'react';
import Proptypes from 'prop-types';
import { CardHeader } from 'reactstrap';
import { LIST_HEADER } from 'constants/index';

const ListHeader = ({ title, children }) => (
  <CardHeader className="bg-white font-weight-bold" data-testid={LIST_HEADER}>
    <b className="mt-2 d-inline-block">{title}</b>
    <div className="float-right">{children}</div>
  </CardHeader>
);

export default ListHeader;
