import React from 'react';
import Proptypes from 'prop-types';

const DefaultAvatar = ({ size, text }) => (
  <div className="d-flex justify-content-center rounded-circle bg-primary t-white align-items-center" style={{ width: size, height: size }}>
    <span className="text-white font-weight-bold">{text}</span>
  </div>
);

export default DefaultAvatar;
