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
      _id: PropTypes.string.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.shape({
          image: PropTypes.shape(),
        }),
      }).isRequired,
      createdAt: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      likes: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    user: PropTypes.shape().isRequired,
    thin: PropTypes.bool,
  };

  static defaultProps = {
    thin: false,
  };

  constructor(props) {
    super(props);
    const { data } = this.props;

    this.state = {
      interval: null,
      relativeCreatedAt: relativeTime(data.createdAt),
      absoluteCreatedAt: absoluteTime(data.createdAt),
    };
  }

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
    const { data, user, thin } = this.props;
    const { content } = data;
    const numberOfLikes = data.likes.length;
    const liked = data.likes.indexOf(user.data.id) !== -1;
    return (
      <Container thin={thin}>
        <PostHeader
          postId={data._id}
          userId={data.user._id}
          userName={data.user.name}
          userAvatar={data.user.avatar.image}
          createdAt={relativeCreatedAt}
          altCreatedAt={absoluteCreatedAt}
        />
        <Content>{content}</Content>
        <PostFooter
          postId={data._id}
          userAvatar={user.data.avatar.image}
          numberOfLikes={numberOfLikes}
          liked={liked}
        />
      </Container>
    );
  }
}

export default Post;
