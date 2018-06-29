import React, { Component, Fragment } from 'react';

import { PostList } from './styles';
import Header from '../../components/Header';
import PostEditor from '../../components/PostEditor';
import Post from '../../components/Post';

class Feed extends Component {
  state = {
    post: {
      user: 'Mariana Zucker',
      createdAt: Date.now(),
      content:
        'Laboris laboris nulla est occaecat eu ex mollit mollit. Ut Lorem ut nostrud reprehenderit Lorem. Magna et consequat duis deserunt nostrud veniam dolor. Sunt est quis ut mollit laboris. Non veniam aute fugiat adipisicing culpa ipsum minim laboris ex aute est consectetur officia. Occaecat ex excepteur minim labore est pariatur incididunt anim aliquip reprehenderit sit proident sunt aliqua.',
    },
  };

  render() {
    const { post } = this.state;
    return (
      <Fragment>
        <Header />
        <PostList>
          <PostEditor />
          <Post data={post} />
          <Post data={post} />
          <Post data={post} />
        </PostList>
      </Fragment>
    );
  }
}

export default Feed;
