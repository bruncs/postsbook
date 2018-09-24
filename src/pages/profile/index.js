import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
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
    match: PropTypes.shape().isRequired,
    user: PropTypes.shape({
      isAuthenticated: PropTypes.bool.isRequired,
    }).isRequired,
    profile: PropTypes.shape().isRequired,
    profileRequest: PropTypes.func.isRequired,
  };

  state = {};

  componentDidMount() {
    const { profileRequest, match } = this.props;
    profileRequest(match.params.id);
  }

  render() {
    const { user, profile } = this.props;
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
              <PostList posts={profile.data.posts} user={user} location="profile" />
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
