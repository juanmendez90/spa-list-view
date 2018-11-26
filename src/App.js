import React, { Component } from 'react';
import Header from 'components/Header';
import Example from 'containers/Users';
import { HEADER_TITLE, HEADER_SUBTITLE } from 'constants';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header title="Woffu" subtitle="HR Suite" />
        <main className="pt-3">
          <Example />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
