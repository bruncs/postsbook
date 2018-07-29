import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserCreators } from '../../store/ducks/user';

import { Container, PostList } from './styles';
import Header from '../../components/Header';
import PostEditor from '../../components/PostEditor';
import Post from '../../components/Post';

class Feed extends Component {
  static propTypes = {
    user: PropTypes.shape({
      isAuthenticated: PropTypes.bool.isRequired,
    }).isRequired,
  };

  state = {
    post: {
      user: 'Mariana Zucker',
      createdAt: '2018-07-27 03:39:00',
      content:
        'Laboris laboris nulla est occaecat eu ex mollit mollit. Ut Lorem ut nostrud reprehenderit Lorem. Magna et consequat duis deserunt nostrud veniam dolor. Sunt est quis ut mollit laboris. Non veniam aute fugiat adipisicing culpa ipsum minim laboris ex aute est consectetur officia. Occaecat ex excepteur minim labore est pariatur incididunt anim aliquip reprehenderit sit proident sunt aliqua.',
    },
  };

  render() {
    const { post } = this.state;
    const { user } = this.props;
    if (!user.isAuthenticated) {
      return <Redirect to="./" />;
    }
    return (
      <Container>
        <Header />
        <PostList>
          <PostEditor />
          <Post data={post} />
          <Post data={post} />
          <Post data={post} />
        </PostList>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Feed);
