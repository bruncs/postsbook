import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Post from '../Post';

const PostList = ({ posts, user, location }) => {
  switch (location) {
    case 'feed':
      return <Fragment>{posts.map(i => <Post key={i._id} data={i} user={user} />)}</Fragment>;
    case 'profile':
      return <Fragment>{posts.map(i => <Post thin key={i._id} data={i} user={user} />)}</Fragment>;
    default:
      return null;
  }
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape),
  user: PropTypes.shape().isRequired,
  location: PropTypes.string.isRequired,
};

PostList.defaultProps = {
  posts: [],
};

export default PostList;
