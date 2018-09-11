import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FriendshipCreators } from '../../store/ducks/friendship';
import { Container } from './styles';

class FriendList extends Component {
  static propTypes = {
    listFriendsRequest: PropTypes.func.isRequired,
  };

  state = {};

  componentDidMount() {
    const { listFriendsRequest } = this.props;
    listFriendsRequest();
  }

  render() {
    return <Container>Amigos</Container>;
  }
}

const mapStateToProps = state => ({
  friendship: state.friendship,
});

const mapDispatchToProps = dispatch => bindActionCreators(FriendshipCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FriendList);
