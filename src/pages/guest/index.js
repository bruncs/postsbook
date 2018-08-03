import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserCreators } from '../../store/ducks/user';

import GuestHeader from '../../components/GuestHeader';
import GuestContent from '../../components/GuestContent';

class Guest extends Component {
  static propTypes = {
    user: PropTypes.shape({
      isAuthenticated: PropTypes.bool.isRequired,
    }),
  };

  static defaultProps = {
    user: {
      isAuthenticated: false,
    },
  };

  state = {};

  render() {
    const { user } = this.props;
    if (user.isAuthenticated) {
      return <Redirect to="./feed" />;
    }
    return (
      <Fragment>
        <GuestHeader />
        <GuestContent />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Guest);
