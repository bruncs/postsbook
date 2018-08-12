import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserCreators } from '../../store/ducks/user';
import { Creators as FeedCreators } from '../../store/ducks/feed';
import { Creators as FriendshipCreators } from '../../store/ducks/friendship';

import { Container, Content } from './styles';
import Header from '../../components/Header';
import PostEditor from '../../components/PostEditor';
import PostList from '../../components/PostList';

class Feed extends Component {
  static propTypes = {
    user: PropTypes.shape({
      isAuthenticated: PropTypes.bool.isRequired,
    }).isRequired,
    feed: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape).isRequired,
    }).isRequired,
    postsRequest: PropTypes.func.isRequired,
  };

  state = {
    interval: null,
  };

  componentDidMount() {
    const { postsRequest } = this.props;
    postsRequest();
    const interval = setInterval(() => postsRequest(), 10000);
    this.setState({ interval });
  }

  componentWillUnmount() {
    const { interval } = this.state;
    clearInterval(interval);
  }

  render() {
    const { user, feed } = this.props;
    if (!user.isAuthenticated) {
      return <Redirect to="./" />;
    }
    return (
      <Container id="container">
        <Header />
        <Content>
          <PostEditor user={user} />
          <PostList posts={feed.data} user={user} />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  feed: state.feed,
  friendship: state.friendship,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...UserCreators,
    ...FeedCreators,
    ...FriendshipCreators,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Feed);
