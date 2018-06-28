import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostHeader from '../PostHeader';
import PostFooter from '../PostFooter';
import { Container, Content } from './styles';

class Post extends Component {
  static propTypes = {
    data: PropTypes.shape({
      user: PropTypes.string.isRequired,
      createdAt: PropTypes.instanceOf(Date).isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {};

  render() {
    const { data } = this.props;
    const { user, createdAt, content } = data;
    return (
      <Container>
        <PostHeader user={user} createdAt={createdAt} />
        <Content>
          {content}
        </Content>
        <PostFooter />
      </Container>
    );
  }
}

export default Post;
