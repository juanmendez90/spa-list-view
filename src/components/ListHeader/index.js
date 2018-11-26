import React from 'react';
import Proptypes from 'prop-types';
import { CardHeader } from 'reactstrap';
import { LIST_HEADER } from 'constants/index';

const ListHeader = ({ title, children }) => (
  <CardHeader className="bg-white border-bottom-0" data-testid={LIST_HEADER}>
    <b className="mt-2 d-inline-block">{title}</b>
    { children && <div className="float-right">{children}</div> }
  </CardHeader>
);

ListHeader.propTypes = {
  title: Proptypes.string,
  children: Proptypes.object,
};

ListHeader.defaultProps = {
  title: '',
  children: null,
};

export default ListHeader;
