import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserCreators } from '../../store/ducks/user';
import {
  Container,
  Grid,
  GridColumn,
  Button,
  ProfileButton,
  Divider,
  Avatar,
  Icon,
  Counter,
} from './styles';
import Logo from '../../assets/images/icons/whitelogo.png';
import Iconset2 from '../../assets/images/icons/iconset2.png';
import Avatar1 from '../../assets/images/avatars/01.png';

class Header extends Component {
  static propTypes = {
    signoutRequest: PropTypes.func.isRequired,
    user: PropTypes.shape({
      isAuthenticated: PropTypes.bool.isRequired,
    }).isRequired,
  };

  state = {};

  handleSignout = () => {
    const { signoutRequest } = this.props;
    signoutRequest();
  };

  render() {
    const { user } = this.props;
    const firstName = user.data.user.name.split(' ')[0];
    const requestsCount = user.data.user.friendRequests.length;
    return (
      <Container>
        <Grid>
          <GridColumn justifyContent="flex-start" alignItems="center" padding="4px 0 0 0">
            <Link to="./feed">
              <img alt="" src={Logo} />
            </Link>
          </GridColumn>
          <GridColumn justifyContent="flex-end" alignItems="center">
            <Link to={`./profile?id=${user.data.user._id}`} style={{ textDecoration: 'none' }}>
              <ProfileButton>
                <Avatar alt="" src={Avatar1} />
                {firstName}
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
                <Icon
                  background={`#4267b2 url(${Iconset2}) no-repeat 0 -493px`}
                  margin="0 -5px 0 0"
                  opacity="1"
                />
                <Counter>
                  {requestsCount}
                </Counter>
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
});

const mapDispatchToProps = dispatch => bindActionCreators(UserCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
