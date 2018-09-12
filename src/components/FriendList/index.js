import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FriendshipCreators } from '../../store/ducks/friendship';
import { Container, Header } from './styles';
import Avatar from '../Avatar';

class FriendList extends Component {
  static propTypes = {
    listFriendsRequest: PropTypes.func.isRequired,
    friends: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  };

  state = {};

  componentDidMount() {
    const { listFriendsRequest } = this.props;
    listFriendsRequest();
  }

  render() {
    const { friends } = this.props;
    return (
      <Container>
        <Header>Amigos</Header>
        <div>
          {friends.map(e => (
            <Avatar key={e._id} size="grown" format="square" image={e.avatar.image}>
              {e.name}
            </Avatar>
          ))}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  friendship: state.friendship,
  friends: state.friendship.friends,
});

const mapDispatchToProps = dispatch => bindActionCreators(FriendshipCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FriendList);
