import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Name } from './styles';
import Avatar from '../Avatar';

class FriendRequest extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.shape({
      image: PropTypes.shape(),
    }),
  };

  static defaultProps = {
    avatar: {
      image: {
        type: 'Buffer',
        data: [],
        createdAt: '',
      },
    },
  };

  state = {};

  render() {
    const { id, name, avatar } = this.props;
    return (
      <Container>
        <Avatar size="medium" image={avatar.image} />
        <Link to={`./profile?id=${id}`}>
          <Name>{name}</Name>
        </Link>
      </Container>
    );
  }
}

export default FriendRequest;
