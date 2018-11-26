import React from 'react';
import Proptypes from 'prop-types';
import { Navbar } from 'reactstrap';
import { MAIN_HEADER } from 'constants/index';


const Header = ({ title, subtitle }) => (
  <header className="bg-primary" data-testid={MAIN_HEADER}>
    <Navbar className="justify-content-center">
      <h2 className="text-white font-weight-bold">{title}</h2>
      <span className="small ml-1 mt-1 text-white font-weight-bold">{subtitle}</span>
    </Navbar>
  </header>
);

Header.propTypes = {
  title: Proptypes.string.isRequired,
  subtitle: Proptypes.string.isRequired,
};

export default Header;
