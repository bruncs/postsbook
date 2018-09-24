import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserCreators } from '../../store/ducks/user';
import { Creators as ProfileCreators } from '../../store/ducks/profile';
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
    location: PropTypes.shape().isRequired,
    user: PropTypes.shape({
      isAuthenticated: PropTypes.bool.isRequired,
    }).isRequired,
    profile: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape).isRequired,
    }).isRequired,
    postsRequest: PropTypes.func.isRequired,
  };

  state = {
    interval: null,
  };

  componentDidMount() {
    const { postsRequest, location } = this.props;
    postsRequest(queryString.parse(location.search).id);
    const interval = setInterval(() => postsRequest(), 10000);
    this.setState({ interval });
  }

  componentWillUnmount() {
    const { interval } = this.state;
    clearInterval(interval);
  }

  render() {
    const { user, profile, location } = this.props;
    // const userId = queryString.parse(location.search).id;
    console.log(profile);
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
              <PostList posts={profile.data} user={user} location="profile" />
            </GridColumn>
          </GridRow>
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  profile: state.profile,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...UserCreators,
    ...ProfileCreators,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
