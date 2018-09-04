import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserCreators } from '../../store/ducks/user';
import { Creators as FeedCreators } from '../../store/ducks/feed';
import {
  Grid,
  GridRow,
  GridColumn,
  Cover,
  CoverImage,
  HeadLine,
  ProfileThumb,
  Name,
} from './styles';
import Header from '../../components/Header';
import Avatar from '../../components/Avatar';
import FriendList from '../../components/FriendList';
import PostList from '../../components/PostList';

class Profile extends Component {
  static propTypes = {
    user: PropTypes.shape({
      isAuthenticated: PropTypes.bool.isRequired,
    }).isRequired,
    feed: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape).isRequired,
    }).isRequired,
    postsRequest: PropTypes.func.isRequired,
  };

  state = {
    interval: null,
  };

  componentDidMount() {
    const { postsRequest } = this.props;
    postsRequest();
    const interval = setInterval(() => postsRequest(), 10000);
    this.setState({ interval });
  }

  componentWillUnmount() {
    const { interval } = this.state;
    clearInterval(interval);
  }

  render() {
    const { user, feed } = this.props;
    if (!user.isAuthenticated) {
      return <Redirect to="./" />;
    }
    return (
      <Fragment>
        <Header />
        <Grid>
          <GridRow>
            <Cover>
              <CoverImage />
              <ProfileThumb>
                <Avatar border="0px" format="square" size="large" image={user.data.avatar.image} />
              </ProfileThumb>
              <Name>{user.data.name}</Name>
              <HeadLine />
            </Cover>
          </GridRow>
          <GridRow>
            <GridColumn>
              <FriendList />
            </GridColumn>
            <GridColumn>
              <PostList posts={feed.data} user={user} location="profile" />
            </GridColumn>
          </GridRow>
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  feed: state.feed,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...UserCreators,
    ...FeedCreators,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
