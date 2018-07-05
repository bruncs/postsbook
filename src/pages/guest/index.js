import React, { Component, Fragment } from 'react';

import GuestHeader from '../../components/GuestHeader';
import GuestContent from '../../components/GuestContent';

class Guest extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <GuestHeader />
        <GuestContent />
      </Fragment>
    );
  }
}

export default Guest;
