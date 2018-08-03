import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

class FriendRequestList extends Component {
  static propTypes = {
    visible: PropTypes.bool,
  };

  static defaultProps = {
    visible: false,
  };

  state = {};

  render() {
    const { visible } = this.props;
    return (
      <Container visible={visible}>
Hello
      </Container>
    );
  }
}

export default FriendRequestList;
