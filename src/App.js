import React, { Component } from 'react';
import Header from 'components/Header';
import Example from 'containers/Users';
import { HEADER_TITLE, HEADER_SUBTITLE } from 'constants/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header title={HEADER_TITLE} subtitle={HEADER_SUBTITLE} />
        <main className="d-flex pt-5 px-8 justify-content-center">
          <Example />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
