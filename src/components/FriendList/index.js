import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FriendshipCreators } from '../../store/ducks/friendship';
import { Container } from './styles';

class FriendList extends Component {
  state = {};

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
