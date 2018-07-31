import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserCreators } from '../../store/ducks/user';
import { Creators as FeedCreators } from '../../store/ducks/feed';

import { Container, PostList } from './styles';
import Header from '../../components/Header';
import PostEditor from '../../components/PostEditor';
import Post from '../../components/Post';

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

  componentDidMount() {
    const { postsRequest } = this.props;
    postsRequest();
  }

  render() {
    const { user, feed } = this.props;
    if (!user.isAuthenticated) {
      return <Redirect to="./" />;
    }
    return (
      <Container>
        <Header />
        <PostList>
          <PostEditor />
          <Post data={feed.data[0]} />
          <Post data={feed.data[1]} />
        </PostList>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  feed: state.feed,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...UserCreators,
    ...FeedCreators,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Feed);
