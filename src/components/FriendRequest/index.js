import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

class FriendRequest extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  state = {};

  render() {
    const { name } = this.props;
    return (
      <Container>
        {name}
      </Container>
    );
  }
}

export default FriendRequest;
