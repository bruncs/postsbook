import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserCreators } from '../../store/ducks/user';
import { Creators as FriendshipCreators } from '../../store/ducks/friendship';
import {
  Container,
  Grid,
  GridColumn,
  Button,
  ProfileButton,
  Divider,
  Icon,
  Counter,
  Caption,
} from './styles';
import Avatar from '../Avatar';
import Logo from '../../assets/images/icons/whitelogo.png';
import Iconset2 from '../../assets/images/icons/iconset2.png';
import FriendRequestList from '../FriendRequestList';

class Header extends Component {
  static propTypes = {
    signoutRequest: PropTypes.func.isRequired,
    user: PropTypes.shape({
      isAuthenticated: PropTypes.bool.isRequired,
    }).isRequired,
    friendship: PropTypes.shape().isRequired,
    listReqsRequest: PropTypes.func.isRequired,
  };

  state = {
    showRequests: false,
  };

  componentDidMount() {
    const { listReqsRequest } = this.props;
    listReqsRequest();
  }

  toggleShowRequests = () => {
    const { showRequests } = this.state;
    this.setState({ showRequests: !showRequests });
  };

  handleSignout = () => {
    const { signoutRequest } = this.props;
    signoutRequest();
  };

  render() {
    const { user, friendship } = this.props;
    const { showRequests } = this.state;
    const firstName = user.data.name.split(' ')[0];
    const requestsCount = friendship.data.length;
    return (
      <Container>
        <Grid>
          <GridColumn justifyContent="flex-start" alignItems="center" padding="4px 0 0 0">
            <Link to="./feed">
              <img alt="" src={Logo} />
            </Link>
          </GridColumn>
          <GridColumn justifyContent="flex-end" alignItems="center">
            <Link to={`./profile/${user.data.id}`} style={{ textDecoration: 'none' }}>
              <ProfileButton>
                <Avatar size="mini" image={user.data.avatar.image} />
                <Caption>{firstName}</Caption>
              </ProfileButton>
            </Link>
            <Divider />
            <Link to="./feed">
              <Button name="feed" type="button">
                Página Inicial
              </Button>
            </Link>
            <Divider />
            {requestsCount > 0 ? (
              <Fragment>
                <FriendRequestList visible={showRequests} />
                <Icon
                  background={`#4267b2 url(${Iconset2}) no-repeat 0 -493px`}
                  margin="0 -5px 0 0"
                  opacity="1"
                  onClick={this.toggleShowRequests}
                />
                <Counter>{requestsCount}</Counter>
              </Fragment>
            ) : (
              <Icon background={`#4267b2 url(${Iconset2}) no-repeat 0 -467px`} />
            )}
            <Divider />
            <Button name="signout" type="button" onClick={this.handleSignout}>
              Sair
            </Button>
          </GridColumn>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  friendship: state.friendship,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...UserCreators,
    ...FriendshipCreators,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
