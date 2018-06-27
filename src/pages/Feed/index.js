import React, { Component, Fragment } from 'react';

import { PostList } from './styles';
import Header from '../../components/Header';
import Post from '../../components/Post';

class Feed extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Header />
        <PostList>
          <Post />
          <Post />
          <Post />
        </PostList>
      </Fragment>
    );
  }
}

export default Feed;
