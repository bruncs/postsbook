import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import PostHeader from '../PostHeader';
import PostFooter from '../PostFooter';
import { Container, Content } from './styles';

const formatTime = time => moment(time)
  .startOf('second')
  .fromNow();

class Post extends Component {
  static propTypes = {
    data: PropTypes.shape({
      user: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    interval: null,
    createdAt: formatTime(this.props.data.createdAt),
  };

  componentDidMount() {
    const { data } = this.props;
    const interval = setInterval(() => {
      this.setState({
        createdAt: formatTime(data.createdAt),
      });
    }, 1000);
    this.setState({ interval });
  }

  componentWillUnmount() {
    const { interval } = this.state;
    clearInterval(interval);
  }

  render() {
    const { createdAt } = this.state;
    const { data } = this.props;
    const { user, content } = data;
    return (
      <Container>
        <PostHeader user={user} createdAt={createdAt} altCreatedAt={data.createdAt} />
        <Content>
          {content}
        </Content>
        <PostFooter />
      </Container>
    );
  }
}

export default Post;
