import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Name } from './styles';
import Avatar from '../Avatar';

class FriendRequest extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  state = {};

  render() {
    const { id, name } = this.props;
    return (
      <Container>
        <Avatar size="medium" />
        <Link to={`./profile?id=${id}`}>
          <Name>{name}</Name>
        </Link>
      </Container>
    );
  }
}

export default FriendRequest;
