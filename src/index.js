import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <h1>
Hello, world!
        </h1>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
