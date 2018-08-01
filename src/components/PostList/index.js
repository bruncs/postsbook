import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Post from '../Post';

const PostList = ({ posts }) => (
  <Fragment>
    {posts.map(i => <Post key={i._id} data={i} />)}
  </Fragment>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default PostList;
