import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Post from '../Post';

const PostList = ({ posts, user }) => (
  <Fragment>{posts.map(i => <Post key={i._id} data={i} user={user} />)}</Fragment>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  user: PropTypes.shape().isRequired,
};

export default PostList;
