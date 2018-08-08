import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import PostHeader from '../PostHeader';
import PostFooter from '../PostFooter';
import { Container, Content } from './styles';

const relativeTime = time => moment(time)
  .startOf('second')
  .fromNow();

const absoluteTime = time => moment(time).format('DD/MM/YYYY hh:mm:ss');

class Post extends Component {
  static propTypes = {
    data: PropTypes.shape({
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.shape({
          image: PropTypes.shape(),
        }),
      }).isRequired,
      createdAt: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    interval: null,
    relativeCreatedAt: relativeTime(this.props.data.createdAt),
    absoluteCreatedAt: absoluteTime(this.props.data.createdAt),
  };

  componentDidMount() {
    const { data } = this.props;
    const interval = setInterval(() => {
      this.setState({
        relativeCreatedAt: relativeTime(data.createdAt),
        absoluteCreatedAt: absoluteTime(data.createdAt),
      });
    }, 1000);
    this.setState({ interval });
  }

  componentWillUnmount() {
    const { interval } = this.state;
    clearInterval(interval);
  }

  render() {
    const { relativeCreatedAt, absoluteCreatedAt } = this.state;
    const { data } = this.props;
    const { user, content } = data;
    return (
      <Container>
        <PostHeader
          userId={user._id}
          userName={user.name}
          userAvatar={user.avatar.image}
          createdAt={relativeCreatedAt}
          altCreatedAt={absoluteCreatedAt}
        />
        <Content>{content}</Content>
        <PostFooter />
      </Container>
    );
  }
}

export default Post;
